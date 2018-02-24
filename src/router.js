import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DownloadDetail from './routes/DownloadDetail';
import ReportTetail from './routes/ReportTetail.js';
import Deduct from './routes/Deduct.js';
import TransactionMoney from './routes/TransactionMoney.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/downloadDetail" component={DownloadDetail} />
        <Route path="/ReportTetail" component={ReportTetail} />
        <Route path="/deduct" component={Deduct} />
        <Route path="/transactionMoney" component={TransactionMoney} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
