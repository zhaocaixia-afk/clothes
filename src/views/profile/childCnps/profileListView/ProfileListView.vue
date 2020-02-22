<template>
    <div class="list-view">
        <div class="list-item" v-for="(item,index) in list" :key="index">
            <img :src="require('../../../../assets/img/profile/'+item.icon)" alt="">
            <span class="text">{{item.info}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .list-view{
        border-top: 18px solid #f8f8f8;
        .list-item{
            height: 50px;
            line-height: 50px;
            background: #fff;
            font-size: 16px;
            margin-left: 15px;
            border-bottom: 1px solid #f8f8f8;
            img{
                width: 20px;
                height: 20px;
                vertical-align: middle
            }
            .text{
                vertical-align: middle;
                margin-left: 8px;
            }
        }
        .list-item:last-child{
            border-bottom: none;
        }
    }
</style>