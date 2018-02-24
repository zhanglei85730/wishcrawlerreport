import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import PropTypes from 'prop-types';
function Table01({ dispatch,list:dataSource,loading}) {  
  const columns = [
    {
      title: '文件名',
      key: 'fileName',
      dataIndex: 'fileName',
    }, {
      title: '部门',
      key: 'departName',
      dataIndex: 'departName',
    render: (text, record, index) =><a href="#">{text}</a>,
    }, {
      title: '账号 ',
      className: 'accountCode',
      dataIndex: 'accountCode',
      key: 'accountCode',
      sorter:true
    }, {
      title: '当前状态',
      key: 'reportStatus',
      dataIndex: 'reportStatus',
    },{
      title: '账单日期',
      key: 'reportDate',
      dataIndex: 'reportDate',
    },{
      title: '生成时间',
      key: 'createdTimeStamp',
      dataIndex: 'createdTimeStamp',
    },{
      title: '审核状态',
      key: 'verifyStatus',
      dataIndex: 'verifyStatus',
    },{
      title: '审核人',
      key: 'userName',
      dataIndex: 'userName',
    },{
      title: '审核时间',
      key: 'verifyDate',
      dataIndex: 'verifyDate',
    },{
      title: '操作',
      key: '',
      dataIndex: '',
    }];    
  const ds = [{ id: '1000', dataIndex: 'id' }, { name: 'zhanglei',dataIndex: 'zhanglei' }, {age: 30, dataIndex: 'age' }]
  return (
    <Table
      columns={columns}
      dataSource={dataSource.data}
      bordered
      // title={() => 'Header'}
      // footer={() => 'Footer'}
      //table必须有key属性，可以将设置id为key
      rowKey="id"
      rowSelection={{}}
      loading={loading}
      style={{marginTop:'20px'}}   
    />
  )
}


function mapStateToProps(state) {
  const { list } = state.table01;
  return {
    list
  };
}

export default connect(mapStateToProps)(Table01)
