import React from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;
function GlobalInput({ form, ...rest }) {
  const { getFieldDecorator } = form;
  const { id, label, ...inputRest } = rest;
  return (
    <FormItem label={label}>
      {getFieldDecorator(id, [{ required: false }])(
        <Input {...inputRest} />
      )}
    </FormItem>
  );
}

export default GlobalInput;
