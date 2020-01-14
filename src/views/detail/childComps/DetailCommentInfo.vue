<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right" />
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>

    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created*1000 | dateFormat}}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :key="index"
          :src="item"
          v-for="(item, index) in commentInfo.images"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  .info-header {
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .header-title {
      font-size: 15px;
      float: left;
    }
    .header-more {
      font-size: 13px;
      float: right;
      margin-right: 10px;
    }
  }
  .info-user {
    padding: 10px 0 5px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    span {
      font-size: 15px;
      position: relative;
      top: -15px;
      margin-left: 10px;
    }
  }
  .info-detail {
    padding: 0 5px 15px;
    p {
      font-size: 14px;
      line-height: 1.5;
      color: #777777;
    }
    .info-other {
      font-size: 12px;
      margin-top: 10px;
      color: #999999;
      .date {
        margin-right: 8px;
      }
    }
    .info-imgs {
      margin-top: 10px;
      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
      }
    }
  }
}
</style>
