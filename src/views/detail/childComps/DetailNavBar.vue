<template>
  <nav-bar>
    <div slot="left" class="nav-bar-left" @click="back">
      <img src="~assets/img/common/back.svg" />
    </div>
    <div slot="center" class="nav-bar-center">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="nav-bar-item"
        :class="{ active: index === currentIndex }"
        @click="changIndex(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    changIndex(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.nav-bar-left {
  img {
    width: 24px;
    height: 24px;
    margin-top: 10px;
  }
}
.nav-bar-center {
  display: flex;
  .nav-bar-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>
