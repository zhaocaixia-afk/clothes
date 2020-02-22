<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList";
import CartBottomBar from './childComps/CartBottomBar';

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartListLength"])
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  }
};
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  .scroll{
    overflow: hidden;
    height: calc(100% - 44px - 49px - 40px);
  }
}
</style>
