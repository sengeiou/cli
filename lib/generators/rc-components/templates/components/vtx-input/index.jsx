import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/es/input';

const VtxInput = forwardRef((props, ref) => {
    const { showCount = false, type, onChange, ...restProps } = props;
    const MAX_LENGTH_DEFAULT = type === 'textarea' ? 200 : 32;

    const [len, setLen] = useState(0);

    useEffect(() => {
        const val = props.value || '';
        updateLength(val);
    }, []);

    function handleChange(e) {
        const val = e.target.value;
        updateLength(val);
        if (typeof onChange === 'function') {
            onChange(e);
        }
    }

    function updateLength(val = '') {
        const type = typeof val;
        let length = 0;
        switch (type) {
            case 'number':
                length = val.toString().length;
                break;
            case 'string':
                length = val.length;
                break;
            default:
                break;
        }
        setLen(length);
    }

    const maxLength = props.maxLength || MAX_LENGTH_DEFAULT;
    const suffix = `${len}/${maxLength}`;

    let newProps = {
        ref,
        maxLength,
        onChange: handleChange,
        placeholder: '请输入',
        ...restProps,
    };
    if (type !== 'textarea' && showCount) {
        newProps = {
            suffix,
            ...newProps,
        };
    }
    return (
        <>
            {type === 'textarea' ? (
                <div className="vtx-input-textarea" data-count={suffix}>
                    <Input.TextArea {...newProps} />
                </div>
            ) : (
                <Input {...newProps} />
            )}
        </>
    );
});

VtxInput.TextArea = forwardRef((props, ref) => {
    return <VtxInput ref={ref} {...props} type="textarea" />;
});

VtxInput.Search = Input.Search;
VtxInput.Group = Input.Group;
VtxInput.Password = Input.Password;

VtxInput.propTypes = {
    maxLength: PropTypes.number,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showCount: PropTypes.bool,
};
export default VtxInput;
