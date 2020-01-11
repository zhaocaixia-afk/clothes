<template>
    <div class="detail">
        <detail-nav-bar></detail-nav-bar>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null
            }
        },
        created() {
            // this.iid = this.$route.params.iid
            this.iid = this.$route.query.iid
        },
        components: {
            DetailNavBar
        }
    }
</script>

<style lang="scss" scoped>

</style>