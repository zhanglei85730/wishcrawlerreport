import React from 'react';
import { connect } from 'dva';
import { Router, Route, Redirect, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import DownloadDetail from './routes/DownloadDetail';
// import ReportTetail from './routes/ReportTetail.js';
// import Deduct from './routes/Deduct.js';
// import TransactionMoney from './routes/TransactionMoney.js';
import MainLayout from './components/common/MainLayout.js';
import menuNodes from './config/router.js';
import Login from './routes/Login.js';

const RouterProtect = ({ history }) => (
  <Router history={history}>
    <MainLayout>
      {menuNodes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </MainLayout>
  </Router>
);

const LoginRoute = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/login" />)} />
      <Route path="/login" exact component={Login} />
    </Switch >
  </Router>
);
// function RouterConfig({ history }) {
//   const isLogined = false;
//   const logindPath = '/login';
//   return (
//     <div>
//       <Router history={history}>
//         <MainLayout>
//           {menuNodes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               render={() => (
//                 isLogined ? <route.main /> : <Redirect to="/login" />)}
//             />
//           ))}
//           <Route path={logindPath} component={Login} />

//         </MainLayout>
//       </Router>
//     </div>
//   );
// }

const Authorized = ({ app, history }) => {
  // app是一个隐含属性
  const { login } = app._store.getState();
  const { isAuthorized } = login;
  debugger
  return (
    isAuthorized ? <RouterProtect history={history} /> : <LoginRoute history={history} />
  );
};
// const mapStateToProps = ({ login }) => {
//   return login;
// };
// export default connect(mapStateToProps)(Authorized);

export default Authorized;
