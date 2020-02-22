<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <div slot="center">我的信息</div>
        </nav-bar>
        <profile-header/>
        <profile-info/>
        <profile-list-view :list="orderList"/>
        <profile-list-view :list="serviceList"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileHeader from './childCnps/profileHeader/ProfileHeader'
import ProfileInfo from './childCnps/profileInfo/ProfileInfo'
import ProfileListView from './childCnps/profileListView/ProfileListView'

    export default {
        name:'Profile',
        data(){
            return{
                orderList: [
                    { icon: 'message.svg', info: '我的信息' },
                    { icon: 'pointer.svg', info: '积分商城' },
                    { icon: 'vip.svg', info: '会员卡' }
                ],
                serviceList: [
                    { icon: 'cart.svg', info: '我的购物车' },
                    { icon: 'shopping.svg', info: '下载购物App' }
                ]
            }
        },
        components: {
            NavBar,
            ProfileHeader,
            ProfileInfo,
            ProfileListView
        }
    }
</script>

<style lang="scss" scoped>
</style>