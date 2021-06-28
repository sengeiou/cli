---
title: MultipleSelect 下拉多选
---

# MultipleSelect 下拉多选

此选择器用于单列多选场景。

<Mobile src="http://front-end.pages.cloudhw.cn:8000/ember/example/#/pages/v-multiple-select/index"/>

## 代码演示

### 基础使用

```vue
<template>
    <v-multiple-select :data="list" v-model="checkedKeys"></v-multiple-select>
</template>

<script>
export default {
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
        };
    },
};
</script>

<style></style>
```

### 自定义确认文字和颜色

```vue
<template>
    <v-multiple-select :data="[]" confirmText="提交" confirmColor="#18b566"></v-multiple-select>
</template>
```

## API

### Props

| 参数              | 说明                                   | 类型    | 默认值         |
| ----------------- | -------------------------------------- | ------- | -------------- |
| v-model           | 指定当前选中的条目                     | Array   | []             |
| data              | 下拉列表数据，要求数据格式{key, value} | Array   | []             |
| disabled          | 是否禁用选择                           | Boolean | -              |
| placeholder       | 文本 placeholder 显示值                | string  | '请选择'       |
| border            | 文本是否有边框                         | Boolean | false          |
| searchPlaceholder | 搜索框 placeholder 显示值              | string  | '请输入关键字' |
| confirmText       | 弹出层确认提示文字                     | string  | '确认'         |
| confirmColor      | 弹出层确认提示文字颜色                 | string  | '#2979ff'      |
