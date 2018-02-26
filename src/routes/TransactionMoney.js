import React from 'react';
import { connect } from 'dva';
import SearchForm from '../components/TransactionMoney/SearchForm/SearchForm.js';
import Table01 from '../components/DownloadDetail/Table/Table01.js';

function DownloadDetail() {
  return (
    <div>
      <SearchForm />
      <Table01 />
    </div>
  );
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default connect()(DownloadDetail);
