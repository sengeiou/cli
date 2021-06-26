/**
 * desc: 普通input
 */
import React, { forwardRef } from 'react';
import { Form } from 'antd';
import { VtxInput } from '@babe0806/components';

function Demo({ form }, ref) {
    const { getFieldDecorator } = form;
    return (
        <Form ref={ref}>
            <Form.Item>
                {getFieldDecorator('name')(
                    <VtxInput showCount placeholder="name" style={{ width: 220 }} />,
                )}
            </Form.Item>
        </Form>
    );
}

export default Form.create()(forwardRef(Demo));
