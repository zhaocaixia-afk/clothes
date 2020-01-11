<template>
  <div class="goods-item" @click="itemClick">
    <img :src="gooditem.showLarge.img" @load="imageLoad"/>
    <p class="goods-title">{{ gooditem.title }}</p>
    <p class="goods-info">
      <span class="price">{{ gooditem.price }}</span>
      <span class="sale">{{ gooditem.cfav }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    // 图片加载完成,发出事件,进行高度刷新
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      // this.$router.push('/detail'+this.gooditem.iid)
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.gooditem.iid
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.goods-item {
  width: 48%;
  img {
    border-radius: 5px;
  }
  .goods-title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .goods-info{
      text-align: center;
      margin: 2px 0 5px 0;
      .price{
        color: var(--color-high-text);
        margin-right: 20px;
      }
      .sale{
        position: relative;
      }
      .sale::before{
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
      }
  }
}
</style>
