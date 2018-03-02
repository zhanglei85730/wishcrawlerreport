import React from 'react';
import { connect } from 'dva';
import Login from '../components/Login';

function WrappedLogin() {
  return (
    <Login />
  );
}

Login.propTypes = {
};

export default connect()(WrappedLogin);
