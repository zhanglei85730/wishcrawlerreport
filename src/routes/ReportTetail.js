import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/common/MainLayout.js';


function RreportDetail({ children, location }){
  return (
    <MainLayout>
       <div>2222222222222</div>
    </MainLayout>
  )
}

function mapStateToProps(state) { 
}
// ReactDOM.render(<SiderDemo />, mountNode);
export default connect()(RreportDetail);