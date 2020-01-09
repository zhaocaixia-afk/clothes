<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
// import {request} from '../../network/request'
    export default {
        name:'Home',
        created() {
            // 第一种:没有成功
            // request({
            //     config:'/home/multidata',
            //     success:(res) => {
            //         console.log(res)
            //     },
            //     failure:(err) => {
            //         console.log(err)
            //     }
            // })
            // 第二种
            // request({
            //     baseConfig:'/home/multidata',
            //     success:(res) => {
            //         console.log(res)
            //     },
            //     failure:(err) => {
            //         console.log(err)
            //     }
            // })
            // 第三种,第四种
            // request({
            //     url:'/home/multidata'
            // }).then( res => {
            //     console.log(res)
            // }).catch( err => {
            //     console.log(err)
            // })
        },
        components:{
            NavBar
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/css/basic.scss';
#home{
    .home-nav{
        background-color: var(--color-tint);
        color: var(--color-word);
    }
}
</style>