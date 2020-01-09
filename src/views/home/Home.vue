<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- swiper轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <a href="javascript:;">
            <img :src="item.image" />
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import { getMultidata } from "../../network/home";
import Swiper from "swiper";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    };
  },
  created() {
    // /home/multidata接口数据
    getMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // initialSlide :0,
          // observer:true,//修改swiper自己或子元素时，自动初始化swiper
          // observeParents:true,//修改swiper的父元素时，自动初始化swiper
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    });
    // 第一种:没有成功
    // request({
    //     config:'/home/multidata',
    //     success:(res) => {
    //         console.log(res)
    //     },
    //     failure:(err) => {
    //         console.log(err)
    //     }
    // })
    // 第二种
    // request({
    //     baseConfig:'/home/multidata',
    //     success:(res) => {
    //         console.log(res)
    //     },
    //     failure:(err) => {
    //         console.log(err)
    //     }
    // })
    // 第三种,第四种
    // request({
    //     url:'/home/multidata'
    // }).then( res => {
    //     console.log(res)
    // }).catch( err => {
    //     console.log(err)
    // })
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";

#home {
    .home-nav {
        background-color: var(--color-tint);
        color: var(--color-word);
    }
    .swiper-container{
        width: 100%;
        height: 200px;
    }
}
</style>
