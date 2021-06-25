function trim(value: any) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
        const valueClone = {} as Record<string, any>;
        Object.keys(value).forEach(k => {
            valueClone[k] = trim(value[k]);
        });
        return valueClone;
    }
    if (typeof value === 'string') {
        return value.trim();
    }
    return value;
}

export default trim;
