import React from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './index.css';

const FormItem = Form.Item;

function Login({ dispatch, form, isAuthorized }) {
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        dispatch({ type: 'login/loginRequest', payload: values });
      }
    });
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ marginTop: '20px' }}>
      <Col lg={6} md={10} sm={24}>
        <Form onSubmit={handleSubmit} className={style.loginForm}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
              )}
            <a className={style.loginFormForgot} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              Log in
          </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </Col>
    </Row>

  );
}

Login.propTypes = {

};
function mapStateToProps({ login }) {
  // 返回在键值就是组件接受的属性值
  return login;
}

const WrappedLogin = Form.create()(Login);
export default connect(mapStateToProps)(WrappedLogin);
