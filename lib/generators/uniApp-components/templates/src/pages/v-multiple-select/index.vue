<template>
    <view>
        <u-navbar title="下拉多选" :custom-back="navigateToHome"></u-navbar>
        <c-demo title="基本使用">
            <v-multiple-select :data="list" v-model="checkedKeys"></v-multiple-select>
            <v-multiple-select :data="list" v-model="checkedKeys1"></v-multiple-select>
            <v-multiple-select :data="list" v-model="checkedKeys2" border></v-multiple-select>
        </c-demo>
        <c-demo title="自定义确认颜色和字体">
            <v-multiple-select
                :data="[]"
                confirmText="提交"
                confirmColor="#18b566"
            ></v-multiple-select>
        </c-demo>
    </view>
</template>

<script>
import mixin from '../../mixins/components';

export default {
    mixins: [mixin],
    data() {
        const data = [];
        for (let i = 10; i < 36; i++) {
            data.push({
                key: i.toString(36) + i,
                value: i.toString(36) + i,
            });
        }
        return {
            list: data,
            checkedKeys: [],
            checkedKeys1: ['a10'],
            checkedKeys2: [],
        };
    },
};
</script>

<style></style>
