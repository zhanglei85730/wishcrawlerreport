import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch, withRouter } from 'dva/router';
import MainLayout from './MainLayout.js';
import Login from '../Login';
import menuNodes from '../../config/router.js';

const LoginWrapped = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Redirect to="/login" />
    </div>
  );
};

function MainLayoutWrapped({ isAuthorized }) {
  const MainLayoutAgen = (
    <MainLayout>
      <Switch>
        {menuNodes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
      {/* 首页配置 登录后跳转到这里 */}
      <Redirect to="/downloadDetail" />
    </MainLayout>
  );
  return (
    isAuthorized ? MainLayoutAgen : <LoginWrapped />
  );
}

const mapStateToProps = ({ login }) => {
  return login;
};

export default withRouter(connect(mapStateToProps)(MainLayoutWrapped));

