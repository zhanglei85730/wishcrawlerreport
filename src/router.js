import React from 'react';
import { Router } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import IndexPage from './routes/IndexPage';
// import DownloadDetail from './routes/DownloadDetail';
// import ReportTetail from './routes/ReportTetail.js';
// import Deduct from './routes/Deduct.js';
// import TransactionMoney from './routes/TransactionMoney.js';
import MainLayoutWrapped from './components/Layouts/MainLayoutWrapped.js';

const RouterProtect = ({ history }) => (
  <LocaleProvider locale={zhCN}>
    <Router history={history}>
      <MainLayoutWrapped />
    </Router>
  </LocaleProvider>
);

export default RouterProtect;
