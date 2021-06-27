---
title: 快速上手
sidebarDepth: 0
---

# 快速上手

## Yarn 安装

```shell
yarn add @vtx/ember -S
```

## 使用方法

`pages.json` 配置 easycom 规则(按需引入)

```json
// pages.json
{
    "easycom": {
        "^v-(.*)": "@vtx/ember/components/v-$1/v-$1.vue"
    },
    // 此为本身已有的内容
    "pages": [
        // ......
    ]
}
```

配置 easycom 规则后，自动按需引入，无需 `import` 组件，直接引用即可。

```vue
<template>
    <v-text>这是一个文本</v-text>
</template>
```

## 预览

你可以通过微信扫描二维码，查看效果

![avatar](http://front-end.pages.cloudhw.cn:8000/ember/qrcode.png)

<Mobile src="http://front-end.pages.cloudhw.cn:8000/ember/example/#/"/>
