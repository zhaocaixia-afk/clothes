import {debounce} from './utils'
// 混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    };
  },
  mounted() {
    // 3.监听item中图片加载完成
    let refresh = debounce(this.$refs.scroll.refresh, 100);
    // 对监听的事件进行保存,方便取消
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
