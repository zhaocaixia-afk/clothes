<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  computed: {
      ...mapGetters(['cartListLength'])
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.cart {
  .cart-nav {
    background-color: var(--color-tint);
    color: var(--color-word);
  }
}
</style>
