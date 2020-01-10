<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- swiper轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <home-recommend :recommend="recommend" />
    <home-feature-view />
    <tab-control class="home-tab-control" :tabList="['流行', '新款', '精选']" />
    <goods-list :goodsList="goods['pop'].list"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from 'components/content/goods/GoodsList';

import HomeRecommend from "./childComponent/HomeRecommend";
import HomeFeatureView from "./childComponent/HomeFeatureView";

import { getMultidata, getHomeGoods } from "network/home";
import Swiper from "swiper";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
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
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      });
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeRecommend,
    HomeFeatureView
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";

#home {
  padding-top: 44px;
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-word);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .swiper-container {
    width: 100%;
    height: 200px;
  }
  .home-tab-control {
    position: sticky;
    top: 44px;
  }
}
</style>
