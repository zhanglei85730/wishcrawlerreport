import React from 'react';
import { connect } from 'dva';
import {Table} from 'antd';
import PropTypes from 'prop-types';
function Table01({dispatch,list:dataSource}) { 
      const columns = [
        {
          title: 'id',
          dataIndex: 'id',         
        },{
        title: '部门',
        dataIndex: 'depart_ment',
        render: text => <a href="#">{text}</a>,
      }, {
        title: '店铺',
        className: 'column-money',
        dataIndex: 'shop_name',
      }, {
        title: 'Address',
        dataIndex: 'product_id',
      }];
      return (
        <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
        //table必须有key属性，可以将设置id为key
        rowKey="id"
      />
      )
}


function mapStateToProps(state) {
  const {list} = state.table01;
  return {
    list
  };
}

export default connect(mapStateToProps)(Table01)
