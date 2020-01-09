<template>
    <div class="tab-control">
        <div v-for="(item,index) in tabList" :key="index" class="tab-control-item" :class="currentIndex === index ? 'active':''" @click="tabcontrolClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabControl',
        data() {
            return {
                currentIndex: 0
            }
        },
        props:{
            tabList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            tabcontrolClick(index){
                this.currentIndex = index
            }
        },
    }
</script>

<style lang="scss" scoped>
.tab-control{
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #fff;
    .tab-control-item{
        flex: 1;
        text-align: center;
    }
    .active{
        color: pink;
        span{
            padding-bottom: 5px;
            border-bottom: 2px solid pink;
        }
    }
}
</style>