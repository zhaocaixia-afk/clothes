<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: "App",
  components:{
    MainTabBar
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/basic.css";
</style>
