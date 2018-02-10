import React from 'react';
import {Menu, Icon,} from 'antd';
import { Link } from 'dva/router';
function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="vertical"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="home" />首页</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/">下载详情</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know">报表详情</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">报表汇总</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;

