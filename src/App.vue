<template>
    <div class="box">
        {{ title }}
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '我是APP'
        }
    },
    created() {},
}
</script>

<style lang="scss">
    .box {
        width: 500px;
        height: 200px;
        color: #fff;
        background-color: #000;
    }
</style>