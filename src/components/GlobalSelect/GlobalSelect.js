import React from 'react';
import { Form, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

function Globalselect({ form, ...rest }) { 
  const { getFieldDecorator } = form;
  // const nameArr = formItems.filter((item) => {
  //   return item.type === unique ? item : '';
  // });

  // const dataItem = nameArr[0];
  const { id, data, label, ...selectProps } = rest;
  return (
    <FormItem label={label}>
      {getFieldDecorator(id, [{ required: false }])(
        <Select
          placeholder="请选择"
          optionFilterProp="children"
          {...selectProps}
        >
          {
            data.map((k, i) => {
              return (<Option {...k} key={i}>{k.text}</Option>);
            })
          }
        </Select>
      )}
    </FormItem>
  );
}

export default Globalselect;
