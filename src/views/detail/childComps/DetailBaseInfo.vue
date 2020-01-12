<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <sup v-if="goods.discount" class="discount">{{ goods.discount }}</sup>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <div
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index" v-if="goods.services[index - 1].icon"
      >
        <img
          :src="goods.services[index - 1].icon"
        />
        <span>{{ goods.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.base-info {
  padding: 10px 8px 0 8px;
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
  .info-price {
    margin-top: 10px;
    .n-price {
      color: var(--color-tint);
      font-size: 24px;
    }
    .o-price {
      text-decoration: line-through;
      margin: 0 5px;
    }
    sup {
      background-color: var(--color-high-text);
      font-size: 14px;
      color: #fff;
      border-radius: 10px;
      padding: 3px;
    }
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-service {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .info-service-item {
      display: flex;
      align-items: center;
      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
      span{
          color: var(--color-black);
          font-weight: bold;
      }
    }
  }
}
</style>
