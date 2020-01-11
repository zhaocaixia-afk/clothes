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
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";

import { getDetail } from "../../network/detail";

import Swiper from "swiper"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
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
        this.topImages = res.result.itemInfo.topImages;
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
    DetailNavBar
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
