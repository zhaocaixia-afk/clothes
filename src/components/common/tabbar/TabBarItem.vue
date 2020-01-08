<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive">
            <slot name='item-icon-active'></slot>
        </div>
        <div v-else>
            <slot  name="item-icon"></slot>
        </div>
        <div :style="activeStyle">
            <slot name=item-text></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabBarItem',
        data() {
            return {}
        },
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'pink'
            }
        },
        computed: {
            // 找到的当前路由=true
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            // 根据传过来的值,修改颜色
            activeStyle(){
                return this.isActive ? { color:this.activeColor } : {}
            }
        },
        methods: {
            // 点击 切换 路由
            itemClick(){
                this.$router.replace(this.path)
            }
        },
    }
</script>

<style lang="scss" scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    img{
        width: 24px;
        height: 24px;
        margin: 3px 0;
        vertical-align: middle;
    }
}
</style>