<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <!-- 轮播图 -->
    <scroll class="scroll" :probe-type="3" ref="scroll">
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
      <detail-images-info :detailInfo="detailInfo"/>
      <detail-params-info :goodsParam="goodsParam"/>
      <detail-comment-info :commentInfo="commentInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailImagesInfo from './childComps/DetailImagesInfo';
import DetailParamsInfo from './childComps/DetailParamsInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam } from "../../network/detail";

import Swiper from "swiper";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {}
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
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 1.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 2.获取商家信息
        this.shop = new Shop(data.shopInfo)
        // 3.获取商品图片
        this.detailInfo = data.detailInfo
        // 4.获取商品尺寸
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // 5.商品评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
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
    imgLoad(){
      this.$refs.scroll.refresh();
    }
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";
.detail {
  height: 100vh;
  .scroll {
    overflow: hidden;
    height: calc(100% - 44px);
    .swiper-container {
      height: 300px;
    }
  }
}
</style>
