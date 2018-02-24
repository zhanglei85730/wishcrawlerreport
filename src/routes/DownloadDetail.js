import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/common/MainLayout.js';
import SearchForm from '../components/DownloadDetail/SearchForm/SearchForm.js';
import Table01 from '../components/DownloadDetail/Table/Table01.js';


function DownloadDetail() {
  return (
    <MainLayout>
      <SearchForm />
      <Table01 />
    </MainLayout>
  );
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default connect()(DownloadDetail);
