<template>
    <div class="goods-list">
        <goods-list-item v-for="(item,index) in goodsList" :key="index" :gooditem="item"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

    export default {
        name:'GoodsList',
        props: {
            goodsList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components: {
            GoodsListItem
        }
    }
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>