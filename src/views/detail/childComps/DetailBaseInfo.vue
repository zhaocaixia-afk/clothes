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
        :key="index"
      >
        <img
          v-if="goods.services[index - 1].icon"
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
  padding: 10px 8px;
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
    padding: 20px 0 5px 0;
    border-bottom: 1px solid rgb(200,200,200);
  }
  .info-service {
    padding: 20px 0;
    border-bottom: 5px solid rgb(220,220,220);
    display: flex;
    justify-content: space-between;
    .info-service-item {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
      span{
          color: black;
          font-weight: bold;
      }
    }
  }
}
</style>
