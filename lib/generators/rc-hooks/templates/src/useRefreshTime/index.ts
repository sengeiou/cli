import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const getTime = (format: string = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs().format(format);
};

function useRefreshTime(format?: string) {
    const [time, setTime] = useState(getTime(format));
    const delay = 1000;
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getTime(format));
        }, delay);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return time;
}

export default useRefreshTime;
