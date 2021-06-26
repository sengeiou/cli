---
order: 1
title: useWeather
group:
    title: Hooks
    path: /hooks
---

# useWeather

获取天气信息，基于[和风天气](https://dev.qweather.com/)提供的 API 实现

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```js
const { temp, windDir, windScale, windSpeed, condTxt, icon } = useWeather(location, {
    key?: string,
    color?: boolean; // 色彩
});
```

### Result

| 参数      | 说明         | 类型   |
| --------- | ------------ | ------ |
| province  | 省           | string |
| city      | 市           | string |
| temp      | 温度         | number |
| windDir   | 风向         | string |
| windScale | 风力等级     | number |
| windSpeed | 风速         | number |
| condTxt   | 天气描述     | string |
| icon      | 天气状况图标 | string |

### Params

| 参数     | 说明                                                         | 类型    | 默认值                           |
| -------- | ------------------------------------------------------------ | ------- | -------------------------------- |
| location | 城市、地区或 POI 点的 ID                                     | string  |                                  |
| key      | 用户认证密钥 https://dev.qweather.com/docs/start/get-api-key | string  | 10818884d7704a70be7ad5b3cc817d25 |
| color    | 天气状况图标是否带有色彩                                     | boolean | true                             |

## 查询 location 工具

搜索城市信息获取 `locationID`，既获取天气信息的参数 `location`

<code src="./demo/search.tsx" inline/>
