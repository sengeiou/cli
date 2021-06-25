---
title: 快速使用
order: 1
---

# 快速使用

## 安装

```shell
yarn add utils -S
```

## 使用

```js
import { util } from 'utils';
```

## 按需加载

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载

```json
{
    "extraBabelPlugins": [
        ["import", { "libraryName": "utils", "camel2DashComponentName": false }, "utils"]
    ]
}
```
