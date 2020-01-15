<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button class="check-button" :is-checked="isSelectAll" />
      <span @click="clickAll">全选</span>
    </div>
    <div class="total-price">
      <span>合计:￥{{ totalPrice }}</span>
    </div>
    <div class="total-count">去计算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import { mapState } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    }),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.isCheck;
        })
        .reduce((preValue, item) => {
          return item.price * item.count + preValue;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.cartList
        .filter(item => {
          return item.isCheck;
        })
        .reduce((preCount, item) => {
          return item.count + preCount;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      // 找isCheck为false,length大于0
      return !this.cartList.filter(item => !item.isCheck).length;
      // return !this.cartList.find(item => !item.isCheck)
    }
  },
  methods: {
    // 1.全选按钮点击
    clickAll() {
        if(this.isSelectAll){
            this.cartList.forEach(item => item.isCheck = false)
        }else{
            this.cartList.forEach(item => item.isCheck = true)
        }
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  height: 40px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2%;
  .check {
    display: flex;
    align-items: center;
    width: 20%;
    .check-button {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
  .total-price {
    flex: 1;
    padding-left: 13%;
  }
  .total-count {
    width: 25%;
    height: 100%;
    background: red;
    text-align: center;
    line-height: 40px;
  }
}
</style>
