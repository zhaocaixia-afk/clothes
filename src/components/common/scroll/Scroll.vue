<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // 1.初始化scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position)
        this.$emit("scroll", position);
      });
    }

    // 3.监听滚动到底部 上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('加载更多')
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 封装的滚动到顶部函数
    scrollTo(x, y, time = 300) {
      // this.scroll && ..是为了判断是否有值
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 加载更多 多次操作
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log('---')
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
};
</script>

<style lang="scss" scoped></style>
