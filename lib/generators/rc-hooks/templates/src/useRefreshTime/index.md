---
order: 1
title: useRefreshTime
group:
    title: Hooks
    path: /hooks
---

# useRefreshTime

封装了显示当前时间，并实时刷新

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 自定义时间格式

<code src="./demo/demo2.tsx" />

## API

```js
const time = useRefreshTime(
    format?: string;
);
```

### Params

| 参数   | 说明     | 类型   | 默认值                |
| ------ | -------- | ------ | --------------------- |
| format | 时间格式 | string | 'YYYY-MM-DD HH:mm:ss' |
