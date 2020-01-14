import {debounce} from './utils'
import BackTop from "components/content/backtop/BackTop";
// 混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    // 3.监听item中图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    // 对监听的事件进行保存,方便取消
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};

export const scrollTopMixin = {
  data(){
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 2.点击回到顶部
    backClick() {
      // 调用组件中的方法
      this.$refs.scroll.scrollTo(0,0,200);
    },
    // 抽离控制按钮显示函数
    showTop(position){
      this.isShowBackTop = -position.y > 1000;
    },
  }
}
