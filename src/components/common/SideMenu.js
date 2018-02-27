import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './common.less';
import NavLink from '../NavLink/NavLink.js';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
// [key, path, text, icon]
// 主菜单节点
const menus = [
  ['downloadDetail', '/downloadDetail', '下载详情', 'download'],
  ['reportTetail', '/reportTetail', '详情报表', 'profile'],
  ['reportList', '/reportList', '报表明细', 'file-text'],
];
// 报表明细菜单节点
const ReportListChildMenus = [
  ['transactionMoney ', '/transactionMoney', '交易款项', ''],
  ['deduct', '/deduct', '扣除数额', ''],
  ['releaseDeduct', '/releaseDeduct', '释放暂扣款', ''],
];

function SideMenu({ collapsed, activeKey }) {
  // dispatch不需要传入
  const collapsedData = collapsed.collapsed;
  return (
    <Sider trigger={null} collapsible collapsed={collapsedData} style={{ overflow: 'auto', height: '100vh' }} >
      {/* Logo */}
      <div className={styles.logo} />
      <Menu
        theme="dark" mode="inline"
        defaultSelectedKeys={[activeKey]}
        style={{ marginTop: '30px' }}
      // openKeys={['ReportList']}
      >
        {
          menus.map(([key, path, text, icon], index) => {
            if (key === 'reportList') {
              return (
                <SubMenu key={key} title={<span><Icon type="setting" /><span>{text}</span></span>}>
                  {
                    ReportListChildMenus.map(([key1, path1, text1, icon1], index1) => (
                      <MenuItem key={key1}>
                        <NavLink
                          target={path1} linkText={<span>
                            <Icon type={icon1} />
                            <span>{text1}</span></span>}
                        />
                      </MenuItem>
                    ))
                  }
                </SubMenu>
              );
            } else {
              return (
                <MenuItem key={key}>
                  <NavLink
                    target={path} linkText={<span><Icon type={icon} /><span>{text}</span></span>}
                  />
                </MenuItem>
              );
            }
          })
        }
      </Menu>
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
