<template>
  <div class="category">
    <category-menu :categories="categories" class="category-menu" />
    <category-content class="category-content"/>
  </div>
</template>

<script>
import { getCategory, getSubcategory,getCategoryDetail } from "network/category";
import CategoryMenu from "./childComponent/CategoryMenu";
import CategoryContent from "./childComponent/CategoryContent";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: 0
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    // 1.获取menu数据
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list;
        // 1.2初始化categoryData
        const categoryData = {};
        for (let i = 0; i < this.categories.length; i++) {
          categoryData[i] = {
            subcategories: [],
            categoryDetail: []
          };
        }
        this.categoryData = categoryData;
        // 1.3获取分类
        this._getSubcategory(this.currentIndex)
        // 1.4获取列表
        this._getCategoryDetail(this.currentIndex)
      });
    },
    // 2.获取分类数组
    _getSubcategory(currentIndex) {
      // 2.1获取maitKey
      const maitKey = this.categories[currentIndex].maitKey
      // getSubcategory(maitKey).then(res => {
      //   console.log(res);
      // });
    },
    // 3.获取列表
    _getCategoryDetail(currentIndex){
      const miniWallkey = this.categories[currentIndex].miniWallkey
      // console.log(miniWallkey)
      this._getRealCategoryDetail(currentIndex,miniWallkey,'pop')
    },
    // 4.获取真正的列表
    _getRealCategoryDetail(index, miniWallkey, type){
      // getCategoryDetail(miniWallkey, type).then(res => {
      //   console.log(res)
      // })
    }
  },
  components: {
    CategoryMenu,
    CategoryContent
  }
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  width: 100%;
  height: 100vh;
  .category-menu {
    width: 30%;
  }
  .category-content {
    width: 70%;
  }
}
</style>
