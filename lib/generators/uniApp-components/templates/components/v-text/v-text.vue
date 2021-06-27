<template>
    <div class="v-text" :style="{ color }"><slot></slot></div>
</template>

<script>
export default {
    name: 'v-text',
    props: {
        color: String,
    },
};
</script>

<style lang="less">
.v-text {
    font-size: 32rpx;
}
</style>
