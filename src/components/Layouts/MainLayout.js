import React from 'react';
import { connect } from 'dva';
import { Layout, Icon, Divider } from 'antd';
import { Route } from 'dva/router';
import { Row, Col } from 'antd/lib/grid';
import SideMenu from '../Menu/SideMenu.js';
import BreadcrumbAgent from '../Breadcrumb';
import menuNodes from '../../config/router.js';
import GlobalHeader from '../GlobalHeader';

const { Header, Content } = Layout;

function MainLayout({ children, iconCollapsed, dispatch, BreadcrumbData, isAuthorized }) {
  // 会传入props
  const iconCollapsedValue = iconCollapsed.iconCollapsed;
  function toggle() {
    // const { iconCollapsed } = props;
    // 触发另一个组件action
    dispatch({ type: 'sideMenu/collapsed', payload: { collapsed: !iconCollapsedValue } });
    dispatch({ type: 'mainLayout/changeIconCollapsed', payload: { iconCollapsed: !iconCollapsedValue } });
  }
  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      dispatch({ type: 'login/logout', payload: false });
    }
  };

  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Header style={{ background: '#fff', padding: 0, height: 'auto' }}>
          <Icon
            className="trigger"
            type={iconCollapsedValue ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle} style={{ marginLeft: '20px', fontSize: '20px' }}
          />
          <GlobalHeader onMenuClick={handleMenuClick} />
          <Divider type="horizontal" style={{ margin: '0 0 20px 0' }} />
          <div style={{ padding: '0 20px' }}>
            <BreadcrumbAgent data={BreadcrumbData} />
            {menuNodes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          {/* <PageTitle /> */}
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

function mapStateToProps({ mainLayout, common, login }) {
  // console.log('mapStateToProps:'+JSON.stringify(mainLayout))
  const BreadcrumbValue = common.breadcrumb;
  // 返回在键值就是组件接受的属性值
  return { ...mainLayout, BreadcrumbData: BreadcrumbValue, ...login };
}

export default connect(mapStateToProps)(MainLayout);
// export default wrappedMainLayout;
