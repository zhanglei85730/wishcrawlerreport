import React from 'react';
import { Icon, Dropdown, Menu, Avatar } from 'antd';
import styles from './index.less';

function GlobalHeader(props) {
  const { onMenuClick } = props;
  const menu = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
      <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
    </Menu>
  );
  return (
    <div style={{ float: 'right', marginRight: '50px' }}>
      <Icon type="bell" className={styles.rigitIcon} />
      <Dropdown overlay={menu}>
        <span>
          <Avatar style={{ backgroundColor: '#1890ff', marginLeft: '10px', marginRight: '4px' }} icon="user" size="small" />
          username <Icon type="down" />
        </span>
      </Dropdown>
    </div>
  );
}
export default GlobalHeader;
