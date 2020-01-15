<template>
  <div class="detail">
    <detail-nav-bar @clickCurrent="clickCurrent" ref="navbar"/>
    <!-- 轮播图 -->
    <scroll ref="scroll" class="scroll" :probe-type="3"  @scroll="scroll">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in topImages"
            :key="index"
          >
            <img :src="item" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-images-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info :goodsParam="goodsParam" ref="params"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goodsList="recommend" ref="recommend" class="goods-list"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />

    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailImagesInfo from "./childComps/DetailImagesInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from './childComps/DetailBottomBar';

import Scroll from "components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";

import Swiper from "swiper";

import GoodsList from "components/content/goods/GoodsList";

import {itemListenerMixin,scrollTopMixin} from 'common/mixin';

export default {
  name: "Detail",
  mixins: [itemListenerMixin,scrollTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},

      recommend: [],
      navBarList: [],
      navbarIndex: 0
    };
  },
  created() {
    // this.iid = this.$route.params.iid
    this.iid = this.$route.query.iid;
    this.getDetail(); //请求详情数据
    this.getRecommend();
  },
  mounted() {
    // Home同Detail中相同部分抽离到mixin里面itemListenerMixin
  },
  destroyed(){
    this.$bus.$off("itemImageLoad", this.itemImgListener)
  },
  methods: {
    // 请求数据方法
    getDetail() {
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 1.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 2.获取商家信息
        this.shop = new Shop(data.shopInfo);
        // 3.获取商品图片
        this.detailInfo = data.detailInfo;
        // 4.获取商品尺寸
        this.goodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 5.商品评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }

        // 轮播图
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
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
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
        this.recommend = res.data.list;
      });
    },
    // 监听图片是否加载完成,refresh()
    imgLoad() {
      this.newRefresh(); //调用了抖动函数
      // this.$refs.scroll.refresh(); //DetailImagesInfo.vue里面做了判断
      // 填充navBarList,做点击
      this.navBarList = []
      this.navBarList.push(0)
      this.navBarList.push(this.$refs.params.$el.offsetTop)
      this.navBarList.push(this.$refs.comment.$el.offsetTop)
      this.navBarList.push(this.$refs.recommend.$el.offsetTop)
      this.navBarList.push(Number.MAX_VALUE)
    },
    // 点击NavBar
    clickCurrent(index){
      this.$refs.scroll.scrollTo(0,-this.navBarList[index]+44,200)
    },
    // 滚动对应NavBar和BackTop显示
    scroll(position){
      this.showTop(position)

      let scrollTop = -position.y + 44
      let length = this.navBarList.length
      // 方式一
      // for(let i=0;i<length;i++){
      //   if( (this.navbarIndex !== i) && (i<length-1 && scrollTop >= this.navBarList[i] && scrollTop < this.navBarList[i+1]) || (this.navbarIndex !== i) && (i === length-1 && scrollTop >= this.navBarList[i])){
      //     // console.log(this.navbarIndex)
      //     this.navbarIndex = i
      //     this.$refs.navbar.currentIndex = this.navbarIndex
      //   }
      // }
      // 方式二:数组中添加一个最大值
      for(let i=0;i<length;i++){
        if((this.navbarIndex !== i) && (scrollTop >= this.navBarList[i] && scrollTop < this.navBarList[i+1])){
          this.navbarIndex = i
          this.$refs.navbar.currentIndex = this.navbarIndex
        }
      }
    },
    // 加入购物车
    addCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.lowNowPrice
      product.iid = this.iid
      // console.log(product)
      this.$store.dispatch("addCart",product).then(res => {
        this.$toast.show(res,1500)
      })
    }
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";
.detail {
  height: 100vh;
  .scroll {
    overflow: hidden;
    height: calc(100% - 44px - 58px);
    .swiper-container {
      height: 300px;
    }
    .goods-list{
      border-top: 5px solid #f2f5f8;
      padding-top: 30px;
    }
  }
}
</style>
