<template>
  <div class="shop">
    <div class="shop-name">
      <img :src="shop.logo" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-info">
      <div class="shop-sells">
        <p>{{ shop.sells }}</p>
        <p class="sells-text">总销量</p>
      </div>
      <div class="shop-count">
        <p>{{ shop.goodsCount }}</p>
        <p class="count-text">全部宝贝</p>
      </div>
      <div class="shop-score">
        <p
          v-for="(item, index) in shop.score"
          :key="index"
          class="shop-score-item"
        >
          <span class="score-text">{{ item.name }}</span>
          <span class="score" :class="{ high: item.isBetter }">{{
            item.score
          }}</span>
          <span class="score-isBetter" :class="{ bg: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </p>
      </div>
    </div>
    <div class="button">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.shop {
  padding: 0 8px;
  color: var(--color-black);
  border-bottom: 5px solid #f2f5f8;
  .shop-name {
    padding: 20px 0;
    display: flex;
    align-items: center;
    font-size: 18px;
    img {
      border-radius: 50%;
      border: 1px solid black;
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
  }
  .shop-info {
    display: flex;
    font-weight: bold;
    align-items: center;
    .shop-sells {
      text-align: center;
      flex: 1;
      .sells-text {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .shop-count {
      flex: 1;
      text-align: center;
      border-right: 1px solid gray;
      .count-text {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .shop-score {
      padding-left: 5%;
      .shop-score-item {
        padding: 5px 0;
        .score-text {
          margin-right: 15px;
        }
        .score {
          color: green;
        }
        .high {
          color: red;
        }
        .score-isBetter {
          float: right;
          color: white;
          background-color: green;
          margin-left: 20px;
        }
        .bg {
          background-color: red;
        }
      }
    }
  }
  .button {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    button {
      padding: 3px 35px;
      border-radius: 5px;
      border: none;
      background-color: #f2f5f8;
    }
  }
}
</style>
