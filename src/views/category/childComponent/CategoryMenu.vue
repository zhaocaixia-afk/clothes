<template>
    <scroll class="menu">
        <div v-for="(item,index) in categories" :key="index" class="item" :class="index === currentIndex ? 'active' : '' ">
            {{item.title}}
        </div>
    </scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll"
export default {
    data(){
        return{
            currentIndex: 0
        }
    },
    props: {
        categories: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {

    },
    components: {
        Scroll
    }
}
</script>
<style scoped lang="scss">
.menu{
    height: calc(100% - 49px);
    font-size: 14px;
    background: #f6f6f6;
    .item{
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .active{
        color: #f55777;
        font-weight: 700;
        background: #fff;
        border-left: 3px solid #f55777;
    }
}
</style>