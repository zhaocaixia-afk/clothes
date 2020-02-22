<template>
    <div class="header">
        <div class="avatar">
            <img src="~assets/img/profile/avatar.svg"/>
        </div>
        <div class="login-info">
            <div class="login">登录/注册</div>
            <div class="phone">
                <img src="~assets/img/profile/phone.svg">
                暂无绑定手机号
            </div>
        </div>
        <div class="arrow">
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.header{
    position: relative;
    display: flex;
    align-items: center;
    background: #ff5777;
    color: #fff;
    height: 85px;
    padding: 0 15px;
    .avatar{
        img{
            width: 70px;
            height: 70px;
            border-radius: 35px;
            background: #f2f2f2;
            vertical-align: middle;
        }
    }
    .login-info{
        vertical-align: middle;
        margin-left: 15px;
        .login{
            font-size: 18px;
            margin-top: 9px;
        }
        .phone{
            font-size: 14px;
            margin-top: 5px;
            img{
                width: 18px;
                height: 18px;
                vertical-align: middle;
            }
        }
    }
    .arrow{
        position: absolute;
        right: 30px;
        font-size: 26px;
    }
}
</style>