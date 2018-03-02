import React from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './index.css';

const FormItem = Form.Item;

function Login({ dispatch, form }) {
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({ type: 'login/loginRequest', payload: values });
      }
    });
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ marginTop: '20px' }}>
      <Col lg={7} md={10} sm={24}>
        <Form onSubmit={handleSubmit} className={style.loginForm}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
              )}
            <a className={style.loginFormForgot} href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              登 录
          </Button>
            无账号？ <a href="">马上注册!</a>
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
