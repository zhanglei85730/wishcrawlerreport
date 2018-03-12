import React from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch, withRouter } from 'dva/router';
import MainLayout from './MainLayout.js';
import Login from '../../routes/Login/Login';
import menuNodes from '../../config/router.js';

const LoginWrapped = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      {window.location.pathname !== '/login' ? <Redirect to="/login" /> : ''}
    </div>
  );
};

function MainLayoutWrapped({ isAuthorized, location }) {
  const sessionLogin = sessionStorage.getItem('authorized');
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
      {location.pathname === '/login' ? <Redirect to="/downloadDetail" /> : ''}


    </MainLayout>
  );
  return (
    isAuthorized || sessionLogin ? MainLayoutAgen : <LoginWrapped />
  );
}

const mapStateToProps = ({ login }) => {
  return login;
};

export default withRouter(connect(mapStateToProps)(MainLayoutWrapped));

