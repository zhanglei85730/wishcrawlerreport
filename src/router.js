import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DownloadDetail from './routes/DownloadDetail';
import ReportTetail from "./routes/ReportTetail.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/downloadDetail" component={DownloadDetail} />
        <Route path="/ReportTetail" component={ReportTetail} />
      </Switch>
     
    </Router>
  );
}
export default RouterConfig;
