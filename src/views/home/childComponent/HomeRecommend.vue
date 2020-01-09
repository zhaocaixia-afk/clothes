<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :link="item.link">
        <img :src="item.image" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 10px 0;
  border-bottom: 6px solid #eee;
  font-size: 14px;
  img{
      width: 80px;
      height: 80px;
  }
}
</style>
