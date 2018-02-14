import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './common.less';
import NavLink from '../NavLink/NavLink.js';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
// [key, path, text, icon]
const menus = [
  ['downloadDetail', '/downloadDetail', '下载详情', 'download'],
  ['ReportTetail', '/ReportTetail', '详情报表', 'profile'],
];

function SideMenu({ collapsed, openKeys, activeKey }) {
  //dispatch不需要传入 
  let collapsedData = collapsed.collapsed;
  return (
    <Sider trigger={null} collapsible collapsed={collapsedData} style={{ overflow: 'auto', height: '100vh' }} >
      {/* Logo */}
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeKey]}>
        {
          menus.map(([key, path, text, icon], index) => {
            return (
              <MenuItem key={key}>
                <NavLink target={path} linkText={<span><Icon type={icon} /><span>{text}</span></span>} />
              </MenuItem>
            )
          })
        }
      </Menu>
    </Sider>
  )
}
SideMenu.propTypes = {
};
const mapStateToProps = ({ sideMenu, common }) => {
  const { collapsed } = sideMenu;
  const { activeKey } = common;
  return {
    collapsed: collapsed,
    activeKey: activeKey
  }
}
export default connect(mapStateToProps)(SideMenu);
