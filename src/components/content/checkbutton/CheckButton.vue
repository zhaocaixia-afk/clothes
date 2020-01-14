<template>
    <div class="check-button" :class="{check : isChecked}">
        <img src="~assets/img/cart/tick.svg"/>
    </div>
</template>

<script>
    export default {
        name:'CheckButton',
        props:{
            isChecked:{
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    border-color: #ff4500;
    background: #ff4500;
}
</style>