<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="home-tab-control"
      @tabClick="tabClick"
      :tabList="['流行', '新款', '精选']"
      ref="tabControl1" v-show="isTabFixed"
    />
    <scroll
      ref="scroll"
      class="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- swiper轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in banner"
            :key="index"
          >
            <a :href="item.link">
              <img :src="item.image" @load="imageLoad" />
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <home-recommend :recommend="recommend" />
      <home-feature-view />
      <tab-control
        class="home-tab-control"
        @tabClick="tabClick"
        :tabList="['流行', '新款', '精选']"
        ref="tabControl2"
      />
      <goods-list :goodsList="goods[currentTabClick].list" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeRecommend from "./childComponent/HomeRecommend";
import HomeFeatureView from "./childComponent/HomeFeatureView";

import { getMultidata, getHomeGoods } from "network/home";
import Swiper from "swiper";

import {itemListenerMixin,scrollTopMixin} from 'common/mixin';

export default {
  name: "Home",
  mixins: [itemListenerMixin,scrollTopMixin],
  data() {
    return {
      banner: [],
      recommend: [],

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentTabClick: "pop",
      // isShowBackTop: false,

      tabOffsetTop: 0, //tabControl高度
      isLoad: false, //判读轮播图图片,加载次数

      isTabFixed: false, //是否吸顶

      saveY: 0,

      // itemImgListener: null
    };
  },
  created() {
    // 1.请求多个数据
    this.getMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // Home同Detail中相同部分抽离到mixin里面itemListenerMixin
    // // 3.监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 100);
    // // 对监听的事件进行保存,方便取消
    // this.itemImgListener = () => {
    //   refresh();
    // }
    // this.$bus.$on("itemImageLoad",this.itemImgListener);
  },
  // 下面两个函数,解决keep-active问题
  activated() {
    // console.log(this.saveY)
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 离开keep-alive的操作
    // 1.记录Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY)
    // 2.取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    // 1.根据子组件传过来的值,动态的展示goodslist的内容
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTabClick = "pop";
          break;
        case 1:
          this.currentTabClick = "new";
          break;
        case 2:
          this.currentTabClick = "sell";
      }
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
    // 2.点击回到顶部
    // 3.抽离是否显示向上按钮为一个函数
    // showTop(position){
    //   this.isShowBackTop = -position.y > 1000;
    // },

    // 3.根据滚动
    contentScroll(position) {
      // 1.判断是否显示向上按钮
      // this.isShowBackTop = -position.y > 1000;
      this.showTop(position)
      
      // 2.决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 4.上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentTabClick);
    },
    // 5.轮播图图片是否加载完
    imageLoad() {
      if (!this.isLoad) {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        this.isLoad = true;
      }
    },
    // (/home/multidata)接口数据
    getMultidata() {
      getMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // 方法一
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            // 方法二
            // initialSlide :0,
            // observer:true,//修改swiper自己或子元素时，自动初始化swiper
            // observeParents:true,//修改swiper的父元素时，自动初始化swiper
            autoplay: {
              disableOnInteraction: false //用户操作后,继续自动
            },
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            }
          });
        });
      });
    },
    // (/home/data?type=变量&page=变量)接口数据
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp(); //调用加载更多 多次操作函数
      });
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,

    HomeRecommend,
    HomeFeatureView
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";

#home {
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-word);
  }
  .home-tab-control{
    position: relative;
    z-index: 9;
  }
  .scroll {
    overflow: hidden;
    // 方法一:
    // height: calc(100% - 93px);
    // margin-top: 44px;

    // 方法二:
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    .swiper-container {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
