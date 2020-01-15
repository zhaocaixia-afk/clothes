<template>
    <div class="toast" v-show="show">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        props: {
            message: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgba($color: #000000, $alpha: 0.7);
    color: #fff;
    z-index: 99;
    padding: 10px 20px;
    transform: translate(-50%,-50%);
    border-radius: 10px;
}
</style>