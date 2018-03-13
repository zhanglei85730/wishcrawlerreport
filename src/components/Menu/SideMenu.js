import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';
import NavLink from '../NavLink/NavLink.js';
import menuData from '../../config/menu.js';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
// 递归生成菜单
function formatterMenu(dataArr) {
  return (
    dataArr.map((item) => {
      return (
        item.hasOwnProperty('children') ? (
          <SubMenu
            key={item.key}
            title={<span><Icon type="setting" /><span>{item.name}</span></span>}
          >
            {formatterMenu(item.children)}
          </SubMenu>
        ) : (<MenuItem
          key={item.key}
        >
          <NavLink
            target={item.path}
            linkText={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
          />
        </MenuItem>)
      );
    })
  );
}

function SideMenu({ collapsed, activeKey }) {
  // dispatch不需要传入
  const collapsedData = collapsed.collapsed;
  return (
    <Sider trigger={null} collapsible collapsed={collapsedData} style={{ overflow: 'auto', height: '100vh' }} >
      {/* Logo */}
      <div className={styles.logo}></div>
      <Menu
        theme="dark" mode="inline"
        style={{ marginTop: '30px' }}
      >
        {
          formatterMenu(menuData)
        }
      </ Menu>
    </Sider>
  );
}
SideMenu.propTypes = {
};
const mapStateToProps = ({ sideMenu, common }) => {
  const { collapsed } = sideMenu;
  const { activeKey } = common;
  return {
    collapsed,
    activeKey,
  };
};
export default connect(mapStateToProps)(SideMenu);
