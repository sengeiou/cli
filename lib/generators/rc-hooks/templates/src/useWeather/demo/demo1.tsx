/**
 * title: 基础用法
 * desc: 通过location获取天气信息
 */
import React from 'react';
import { useWeather } from '@vtx/hooks';

export default () => {
    // 苏州
    const location = '101190401';
    const { province, city, temp, windDir, windScale, windSpeed, condTxt, icon } = useWeather(
        location,
    );
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>省：</div>
                <div>{province}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>市：</div>
                <div>{city}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>温度：</div>
                <div>{temp}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>风向：</div>
                <div>{windDir}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>风力等级：</div>
                <div>{windScale}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>风速：</div>
                <div>{windSpeed}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>天气描述：</div>
                <div>{condTxt}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>图标：</div>
                <div>
                    <img src={icon} />
                </div>
            </div>
        </div>
    );
};
