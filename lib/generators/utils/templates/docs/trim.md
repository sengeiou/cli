---
order: 3
title: trim
group:
    title: API
    path: /api
---

# trim

```ts
trim(value: object);
```

移除字符串前面和后面的 空格。

## 参数

`value: object` 需处理的对象

## 返回

_(any)_: 返回处理后的对象

## 例子

```js
trim({ name: '  foo  ' });
// => { name: 'foo' }

trim({ name: '  foo  ', next: { name: '  foo  ' } });
// => { name: 'foo', next: { name: 'foo' } }
```
