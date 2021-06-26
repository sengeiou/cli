/**
 * title: 自定义时间格式
 * desc: 通过设置format控制显示的时间格式
 */
import React from 'react';
import { useRefreshTime } from '@vtx/hooks';

export default () => {
    const time = useRefreshTime('HH:mm:ss');
    return <div>{time}</div>;
};
