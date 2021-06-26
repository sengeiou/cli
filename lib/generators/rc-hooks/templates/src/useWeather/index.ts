import { useState, useEffect } from 'react';

// 用户认证密钥
// https://dev.qweather.com/docs/start/get-api-key
const KEY = '10818884d7704a70be7ad5b3cc817d25';

export interface Options {
    key?: string;
    color?: boolean; // 色彩
}

export interface Result {
    province?: string; // 省
    city?: string; // 城市
    temp?: number; // 温度
    windDir?: string; // 风向
    windScale?: number; // 风力等级
    windSpeed?: number; // 风速
    condTxt?: string; // 天气描述
    icon?: string; // 天气状况图标
}

/**
 * 基于和风天气开发平台提供的API封装
 * @param location 地址
 * @param options
 */
function useWeather(location: string, options: Options = {}): Result {
    const [now, setNow] = useState(
        (): Result => {
            return {
                province: '',
                city: '',
                temp: 0,
                windDir: '',
                windScale: 0,
                windSpeed: 0,
                condTxt: '',
                icon: '',
            };
        },
    );

    useEffect(() => {
        if (location) {
            const xhr = new XMLHttpRequest();
            const { key, color = true } = options;
            xhr.open(
                'GET',
                `https://free-api.heweather.com/s6/weather/now?location=${location}&key=${key ||
                    KEY}`,
                true,
            );
            xhr.onload = function onload() {
                if (this.status === 200) {
                    const res = JSON.parse(this.response || '{}');
                    const { admin_area, parent_city } = res.HeWeather6[0]?.basic || {};
                    const { tmp, wind_dir, wind_sc, wind_spd, cond_code, cond_txt } =
                        res.HeWeather6[0]?.now || {};
                    setNow({
                        province: admin_area,
                        city: parent_city,
                        temp: tmp,
                        windDir: wind_dir,
                        windScale: wind_sc,
                        windSpeed: wind_spd,
                        condTxt: cond_txt,
                        icon: color
                            ? `https://images.weserv.nl/?url=https://a.hecdn.net/img/plugin/190516/icon/c/${cond_code}d.png`
                            : `https://cdn.heweather.com/cond_icon/${cond_code}.png`,
                    });
                }
            };
            xhr.send();
        }
    }, []);

    return now;
}

export default useWeather;
