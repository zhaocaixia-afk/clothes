<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in topImages" :key="index">
            <img :src="item"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo'

import { getDetail,Goods,Shop } from "../../network/detail";

import Swiper from "swiper"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    // this.iid = this.$route.params.iid
    this.iid = this.$route.query.iid;
    this.getDetail(); //请求详情数据
  },
  methods: {
    // 请求数据方法
    getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result
        this.topImages = data.itemInfo.topImages;

        // 1.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 2.获取商家信息
        this.shop = new Shop(data.shopInfo)
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
    }
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo
  }
};
</script>

<style lang="scss" scoped>
@import '../../../node_modules/swiper/css/swiper.min.css';
.detail{
    .swiper-container{
        height: 400px;
    }
}
</style>
