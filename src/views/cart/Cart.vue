<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <cart-list/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartListLength"])
  },
  components: {
    NavBar,
    Scroll,
    CartList
  }
};
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  .cart-nav {
    background-color: var(--color-tint);
    color: var(--color-word);
  }
  .scroll{
    overflow: hidden;
    height: calc(100% - 44px);
  }
}
</style>
