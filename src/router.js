import React from 'react';
import { Router, Route, Switch, Redirect, IndexRoute } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import DownloadDetail from './routes/DownloadDetail';
// import ReportTetail from './routes/ReportTetail.js';
// import Deduct from './routes/Deduct.js';
// import TransactionMoney from './routes/TransactionMoney.js';
import MainLayout from './components/common/MainLayout.js';
import menuNodes from './config/router.js';

// const routes = [
//   {
//     path: "/downloadDetail",
//     exact: true,
//     sidebar: () => <div>downloadDetail</div>,
//     main: DownloadDetail,
//   },
//   {
//     path: "/ReportTetail",
//     sidebar: () => <div>reportTetail</div>,
//     main: ReportTetail,
//   },
//   {
//     path: "/deduct",
//     sidebar: () => <div>deduct</div>,
//     main: Deduct,
//   },
//   {
//     path: "/transactionMoney",
//     sidebar: () => <div>transactionMoney</div>,
//     main: TransactionMoney,
//   }
// ];

// function RouterConfig({ history }) {  
//   return (
//     <Router history={history}>
//       <MainLayout>
//         <Route path="/" exact component={DownloadDetail} />
//         <Route path="/downloadDetail" component={DownloadDetail} />
//         <Route path="/ReportTetail" component={ReportTetail} />
//         <Route path="/deduct" component={Deduct} />
//         <Route path="/transactionMoney" component={TransactionMoney} />
//       </MainLayout>
//     </Router>
//   );
// }
function RouterConfig({ history }) {
  return (
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
}
export default RouterConfig;
