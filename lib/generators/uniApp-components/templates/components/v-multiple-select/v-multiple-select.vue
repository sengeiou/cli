<template>
    <view class="v-multi-select">
        <u-input
            type="select"
            @click="popup"
            :value="inputValue"
            :placeholder="placeholder"
            :border="border"
        ></u-input>
        <u-popup v-model="show" mode="bottom" height="800rpx">
            <view class="v-multi-select-popup_header">
                <a style="color: #606266" @click="cancel">取消</a>
                <a :style="{ color: confirmColor }" @click="confirm">{{ confirmText }}</a>
            </view>
            <view class="v-multi-select-popup_content">
                <view class="v-multi-select-search">
                    <u-search
                        v-model="searchText"
                        :action-text="searchPlaceholder"
                        :show-action="false"
                        :animation="true"
                        shape="square"
                    ></u-search>
                </view>
                <view class="v-multi-select-list">
                    <u-empty v-if="!list.length" :mode="emptyMode" :margin-top="80"></u-empty>
                    <view
                        v-for="item in list"
                        :key="item.key"
                        :class="{
                            'v-multi-select-list_item': true,
                            'v-multi-select-list_item--checked': item._checked,
                        }"
                        @click="check(item.key)"
                    >
                        <text>{{ item.value }}</text>
                        <!-- 选中图标 -->
                        <u-icon v-if="item._checked" name="checkbox-mark" color="#18b566"></u-icon>
                    </view>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
/**
 * v-multiple-select 下拉多选
 * @description 本组件一般用于下拉选择多个
 */
export default {
    name: 'v-multiple-select',
    props: {
        // 选择值
        value: {
            type: Array,
            default() {
                return [];
            },
        },
        // 下拉列表数据，要求数据格式[{key, value}]
        data: {
            type: Array,
            default() {
                return [];
            },
        },
        // 是否禁用选择
        disabled: Boolean,
        // 文本placeholder显示值
        placeholder: {
            type: String,
            default: '请选择',
        },
        // 文本是否有边框
        border: {
            type: Boolean,
            default: false,
        },
        // 搜索框placeholder显示值
        searchPlaceholder: {
            type: String,
            default: '请输入关键字',
        },
        // 弹出层确认提示文字
        confirmText: {
            type: String,
            default: '确认',
        },
        // 弹出层确认提示文字颜色
        confirmColor: {
            type: String,
            default: '#2979ff',
        },
    },

    model: {
        prop: 'value',
        event: 'change',
    },

    data() {
        return {
            // 控制弹出框显隐
            show: false,
            // 搜索框内容
            searchText: '',
            // 选择的列key
            checkedKeys: [],
        };
    },

    computed: {
        // 计算文本框显示的值
        inputValue: function() {
            const { value, data } = this;
            let selectValues = [];
            value &&
                data.map(item => {
                    if (value.includes(item.key)) {
                        selectValues.push(item.value);
                    }
                });
            return selectValues.join(',');
        },

        // 列表，根据查询条件检索内容
        list() {
            const { searchText, data, checkedKeys } = this;
            // 根据搜索框内容刷选
            const filter = searchText ? data.filter(item => item.value.includes(searchText)) : data;
            // 根据checkedKeys判断当前列是否选中
            return checkedKeys.length > 0
                ? filter.map(item => ({ ...item, _checked: checkedKeys.includes(item.key) }))
                : filter;
        },

        emptyMode() {
            const { data, list } = this;
            if (data.length === 0) {
                return 'list';
            }
            return 'search';
        },
    },

    methods: {
        // 弹出
        popup() {
            if (this.disabled) {
                return;
            }
            const { value, searchText } = this;
            Object.assign(this, {
                checkedKeys: value,
                show: true,
                searchText: '',
            });
        },

        // 选中
        check(key) {
            const { checkedKeys } = this;
            let newCheckedKeys = [];
            if (checkedKeys.includes(key)) {
                newCheckedKeys = checkedKeys.filter(item => item != key);
            } else {
                newCheckedKeys = [...checkedKeys, key];
            }
            this.checkedKeys = newCheckedKeys;
        },

        // 点击确认回调
        confirm() {
            const { checkedKeys } = this;
            this.$emit('change', checkedKeys);
            this.show = false;
        },

        // 点击取消回调
        cancel() {
            this.show = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.v-multi-select {
    &-popup {
        &_header {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70rpx;
            padding: 0 34rpx;
            background-color: #fff;
        }
        &_content {
            position: absolute;
            top: 70rpx;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
    &-search {
        margin: 18rpx 36rpx 0 36rpx;
    }
    &-list {
        padding: 16rpx 0;
        &_item {
            display: flex;
            justify-content: space-between;
            padding: 16rpx 34rpx;
        }
        &_item--checked {
            background-color: #fafafa;
        }
        &_item + &_item {
            border-top: 1px solid #f5f5f5;
        }
    }
}
</style>
