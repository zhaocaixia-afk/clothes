<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <a href="javascript:;">
                <img :src="item.image"/>
            </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"

export default {
  name: "HomeSwiper",
  props:['list'],
  mounted() {
      var swiper = new Swiper(".swiper-container", {
        // initialSlide :0,
        // observer:true,//修改swiper自己或子元素时，自动初始化swiper
        // observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination"
        }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../node_modules/swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 200px;
}
</style>
