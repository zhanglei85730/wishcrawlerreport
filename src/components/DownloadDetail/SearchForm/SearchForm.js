import React from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Select, DatePicker, Icon } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  // 组件初始化后开始验证
  /*  componentDidMount() {
     // To disabled submit button at the beginning.
     this.props.form.validateFields();
   } */


  // handleBlur() {
  //   console.log('blur');
  // }

  // handleFocus() {
  //   console.log('focus');
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件,
    // ['userName']参数只校验username的值
    this.props.form.validateFields(['age', 'createDate'], (err, values) => {
      if (!err) {
        const createDateFormat = values.createDate.format('YYYY-MM-DD')
        console.log('Received values of form: ', { ...values, createDate: createDateFormat });
        // table01为model的namespace,tableData为effects下方法，相当与异步的action
        this.props.dispatch({ type: 'table01/tableDataById', payload: { values } });
      }
    });
  }

  render() {
    // const config = {
    //   rules: [{ type: 'object', required: false, message: 'Please select time!' }],
    // };
    // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const { getFieldDecorator } = this.props.form;
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    return (
      <Form layout="inline" onSubmit={this.handleSubmit.bind(this)} >
        {/* <FormItem label="选择日期">
          {getFieldDecorator('createDate', config)(
            <DatePicker />,
          )}
        </FormItem> */}
        <FormItem label="选择日期">
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
        </FormItem>
        {/* 账号选择 */}
        <FormItem label="账号">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="请选择"
            optionFilterProp="children"
            mode="multiple"
            filterOption={(input, option) => {
              return (option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0);
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        {/*  */}
        <FormItem label="部门">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            mode="multiple"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary">查询</Button>
        </FormItem>
        <FormItem>
          <Button>审核通过</Button>
        </FormItem>
        <FormItem>
          <Button>审核驳回</Button>
        </FormItem>
        <FormItem>
          <Button>批量下载</Button>
        </FormItem>
        <FormItem>
          <Button>重置</Button>
        </FormItem>

        {/* <FormItem>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your age' }],
          })(<Input placeholder="输入年龄" />)}
        </FormItem> */}
        {/* <FormItem>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => {
              return (option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            搜索
            </Button>
        </FormItem> */}
        <FormItem>
          展开<Icon type="eye-o" />
        </FormItem>
      </Form>
    );
  }
}

// const saveFormData = {
//   onFieldsChange(props, changedFields) {
//     props.onChange(changedFields);
//   },
//   mapPropsToFields(props) {
//     return {
//       userName: Form.createFormField({
//         ...props.userName,
//         value: props.userName.value,
//       }),
//     };
//   },
//   onValuesChange(_, values) {
//     console.log(values);
//   },
// }

const SearchFormWarp = Form.create()(SearchForm);
// export default WrappedDownloadDetailForm;
// 必须要用connent方法才能与redux结合，才能用redux的dispatch
export default connect()(SearchFormWarp);

