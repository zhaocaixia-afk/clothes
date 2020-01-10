<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

    export default {
        name:'Scroll',
        mounted(){
            new BScroll(this.$refs.wrapper,{
                click:true
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>