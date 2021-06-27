<template>
    <div class="demo-page">
        <div class="page-content">
            <iframe :src="src" frameborder="0" />
        </div>
    </div>
</template>

<style lang="less">
.demo-page {
    position: fixed;
    top: 80px;
    right: 30px;
    width: 310px;
    height: 605.909091px;
    box-sizing: border-box;
    background-image: url('./iphoneX.png');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 64px 21px 22px 23px;
}
@media (min-width: 1600px) {
    .demo-page {
        right: 50%;
        margin-right: -760px;
        width: 330px;
        height: 645px;
    }
}
.page-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    iframe {
        height: 100%;
        width: 100%;
    }
}
</style>

<script>
export default {
    props: {
        src: String,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
