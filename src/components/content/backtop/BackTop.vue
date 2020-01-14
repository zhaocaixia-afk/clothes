<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png"/>
    </div>
</template>

<script>
    export default {
        name:'BackTop'
    }
</script>

<style lang="scss" scoped>
.back-top{
    // z-index: 99;
    position: fixed;
    right: 10px;
    bottom: 55px;
    img{
        width: 55px;
        height: 55px;
    }
}
</style>