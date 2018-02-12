import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './common.less';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

function SideMenu({ props, collapsed, openKeys }) {
  //dispatch不需要传入
  let collapsedData = collapsed.collapsed;
  const rootSubmenuKeys = ['sub1'];
  console.log('openKeys:' + openKeys)
  const clickHandle=()=>{
    console.log('okok')
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsedData} style={{ overflow: 'auto', height: '100vh' }} >
      {/* Logo */}
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={clickHandle}>
        <Menu.Item key="1">
          <Icon type="download" />
          <span>下载详情</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="profile" />
          <span>报表详情</span>
        </Menu.Item>
        <SubMenu key="3" title={<span><Icon type="area-chart" /><span>WISH报表</span></span>}>
          <Menu.Item key="sub1">交易款项</Menu.Item>
          <Menu.Item key="sub2">扣除数额</Menu.Item>
          <Menu.Item key="sub3">释放暂扣款</Menu.Item>
          <Menu.Item key="sub4">扣除退款</Menu.Item>
          <Menu.Item key="sub5">罚款</Menu.Item>
          <Menu.Item key="sub6">费用</Menu.Item>
          <Menu.Item key="sub7">其他费用</Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="table" />
          <span>财务WAS凭证</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="user" />
          <span>账户维护</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="book" />
          <span>业务类型编码</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
SideMenu.propTypes = {
};
const mapStateToProps = (state) => {
  const { collapsed, openKeys } = state.sideMenu;
  return {
    collapsed: collapsed,
    openKeys: openKeys
  }
}
export default connect(mapStateToProps)(SideMenu);
