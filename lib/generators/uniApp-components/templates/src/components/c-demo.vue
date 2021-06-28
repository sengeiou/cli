<template>
    <div class="demo-block">
        <div class="demo-block__title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
};
</script>

<style lang="scss" scoped>
.demo-block {
    padding: 0 16px;
    &__title {
        margin: 0;
        padding: 24px 0 16px;
        color: rgba(69, 90, 100, 0.6);
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
}
</style>
