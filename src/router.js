import React from 'react';
import { Router, Route } from 'dva/router';
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

const Authorized = (props) => {
  const isAuthorized = true;
  return (
    isAuthorized ? <RouterProtect {...props} /> : <Login />
  );
};
export default Authorized;

// export default RouterConfig;
