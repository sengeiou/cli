---
order: 1
nav:
    title: 指南
    order: 1
---

# 快速上手

## 安装

```shell
yarn add @babe0806/components -S
```

## 使用

```js
import { VtxDatePicker } from '@babe0806/components';
```

## 按需加载

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载

```json
{
    "extraBabelPlugins": [
        ["import", { "libraryName": "@babe0806/components", "style": "css" }, "babe0806-components"]
    ]
}
```
