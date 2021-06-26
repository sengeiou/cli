/**
 * desc: textarea
 */
import React, { forwardRef } from 'react';
import { Form } from 'antd';
import { VtxInput } from '@babe0806/components';

function Demo({ form }, ref) {
    const { getFieldDecorator } = form;
    return (
        <Form ref={ref}>
            <Form.Item>
                {getFieldDecorator('memo')(
                    <VtxInput.TextArea showCount rows={5} placeholder="textarea" />,
                )}
            </Form.Item>
        </Form>
    );
}

export default Form.create()(forwardRef(Demo));
