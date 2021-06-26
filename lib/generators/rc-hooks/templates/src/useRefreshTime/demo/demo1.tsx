/**
 * title: 基础用法
 * desc: 实时获取当前时间
 */
import React from 'react';
import { useRefreshTime } from '@vtx/hooks';

export default () => {
    const time = useRefreshTime();
    return <div>{time}</div>;
};
