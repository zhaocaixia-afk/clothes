<template>
    <div>
        <p>{{this.iid}}</p>
    </div>
</template>

<script>
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
    }
</script>

<style lang="scss" scoped>

</style>