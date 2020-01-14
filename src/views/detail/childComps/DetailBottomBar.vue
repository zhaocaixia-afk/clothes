<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  height: 58px;
  background: #fff;
  display: flex;
  text-align: center;
  .bar-item {
    display: flex;
    flex: 1;
    height: 58px;
    div {
      flex: 1;
    }
  }
  .bar-left {
    div {
      font-size: 13px;
      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 11px auto 0;
        background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
      }
      .service {
        background-position: 0 -54px;
      }
      .shop {
        background-position: 0 -98px;
      }
    }
  }
  .bar-right{
      font-size: 15px;
      line-height: 58px;
      height: 58px;
      color: #fff;
      .cart{
          color: #333;
          background-color: #ffe817;
      }
      .buy{
          font-size: 16px;
          background-color: #ff6699;
      }
  }
}
</style>
