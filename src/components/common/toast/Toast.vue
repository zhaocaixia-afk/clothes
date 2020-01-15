<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        data(){
            return{
                message: '',
                isShow: false
            }
        },
        methods: {
            show(message="message",duration=2000){
                this.isShow = true
                this.message = message
                setTimeout(() => {
                    this.isShow = false
                    this.message = ''
                },duration)
            }
        },
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