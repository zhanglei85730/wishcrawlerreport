import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import DownloadDetail from './routes/DownloadDetail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/downloadDetail" component={DownloadDetail} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
