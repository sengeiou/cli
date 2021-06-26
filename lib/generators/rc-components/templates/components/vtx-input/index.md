---
nav:
    title: 组件
    path: /components
group:
    title: 数据录入
    path: /data
    order: 2
---

# VtxInput 输入框

输入框

**变更点**

-   增加字数显示, 采用 antd Input 的属性 `suffix` 实现，如果你要使用 `suffix`，会将字数显示覆盖。

## 代码演示

### 基本用法

<code src="./demo/demo1.jsx">
<code src="./demo/demo2.jsx">

## API

更多 API 参考[Input](https://3x.ant.design/components/input-cn/)，以下为差异点

### VtxInput

| 参数      | 说明             | 类型   | 默认值 | 版本 |
| --------- | ---------------- | ------ | ------ | ---- |
| showCount | 是否显示字数统计 | bool   | false  |      |
| maxLength | 最大输入长度     | number | 20     |      |

### VtxInput.TextArea

| 参数      | 说明             | 类型   | 默认值 | 版本 |
| --------- | ---------------- | ------ | ------ | ---- |
| showCount | 是否显示字数统计 | bool   | false  |      |
| maxLength | 最大输入长度     | number | 200    |      |
