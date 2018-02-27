import React from 'react';
import { connect } from 'dva';

function Login() {
  return (
    <div>请先登录</div>
  );
}

Login.propTypes = {
};

export default connect()(Login);
