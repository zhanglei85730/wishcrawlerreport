import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import SideMenu from '../components/common/SideMenu.js'
import styles from './DownloadDetail.less';
const { Header,Content } = Layout;

class DownloadDetail extends React.Component {
  constructor(props,dispatch){
    super(props);
    //this.toggle =this.toggle.bind(this);//如果不在这里指定，在调用的时候就要指定bind(this)    
    this.state={collapsed:false};       
  }  
  toggle(){
    const {iconCollapsed}= this.props;
    //触发另一个组件action
    this.props.dispatch({type:'sideMenu/collapsed',payload:{collapsed:!iconCollapsed.iconCollapsed}})
    this.props.dispatch({type:'downloadDetail/changeIconCollapsed',payload:{iconCollapsed:!iconCollapsed.iconCollapsed}})
  }
  render() {
    return (
      <Layout>       
        <SideMenu />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.iconCollapsed.iconCollapsed? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle.bind(this)}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  console.log('state.downloadDetail='+JSON.stringify(state.downloadDetail))  
  const {iconCollapsed} = state.downloadDetail;
    return {
      iconCollapsed:iconCollapsed
    };
}
// ReactDOM.render(<SiderDemo />, mountNode);
export default connect(mapStateToProps)(DownloadDetail);