<template>
    <div>
        <cart-list-item v-for="(item,index) in cartList" :key="index" :cart-item="item"/>
    </div>
</template>

<script>
import CartListItem from './CartListItem';
import { mapState } from 'vuex'

    export default {
        name:'CartList',
        computed: {
            ...mapState({
                cartList: state => state.cart.cartList
            })
        },
        components:{
            CartListItem
        }
    }
</script>

<style lang="scss" scoped>

</style>