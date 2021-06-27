## 目录约定

```
├── components          # 组件
│   └── v-text
│       └── v-text.vue
├── docs                # 在线文档
│   └── components
│       └── text.md     # 组件对应的文档 v-text.vue 对应 text.md
├── example             # 组件示例
├── CHANGELOG.md        # CHANGELOG 根据指令自动生成
├── README.md
└── vue.config.js       # example 配置
```

## 组件开发约定

### 组件写在 `components` 目录下

所有的组件写在 `components` 目录下，并符合 `components/组件名称/组件名称.vue` 目录结构。可参考[easycom 组件规范](https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83)

### 需兼容小程序和 H5

-   [小程序不支持列表](https://uniapp.dcloud.io/vue-components?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e4%b8%8d%e6%94%af%e6%8c%81%e5%88%97%e8%a1%a8)
-   [命名限制](https://uniapp.dcloud.io/vue-components?id=%e5%91%bd%e5%90%8d%e9%99%90%e5%88%b6)

### 组件命名必须以 `v-` 开头

所有的组件命名必须以 `v-` 开头，举例我们需开发一个树形控件，我们在 `components` 目录下新建 `v-tree/v-tree.vue`

## Doc 在线文档约定

在线文档通过 [VuePress](https://vuepress.vuejs.org/zh/) 搭建。每个组件都必须提供一个使用文档（md 文件），目录为 `docs/components/*` 下

文档结构大致如下，标题 -> 代码示例 -> API -> example

```
# 组件标题

组件说明

## 代码示例

### 小标题

// 示例代码，代码块

## API

表格
```

## 提交流程规范

代码提交前必须执行`yarn lint`，校验通过过才可提交。提交信息必须遵循 [Angular 提交信息规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) 。版本更新和 生成 `CHANGELOG.md` 通过`yarn release`指令执行

## scripts 说明

```
# 启动在线文档服务
$ yarn start

# 打包在线文档
$ yarn build

# 组件库示例服务
$ yarn example:dev

# 打包组件库示例
$ yarn example:build

# 校验
$ yarn lint

# 版本发布
$ yarn release
```
