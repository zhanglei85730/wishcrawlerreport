// import React from 'react';
// import { connect } from 'dva';
// import { Form,Select } from 'antd';
// import Header from '../components/Header';
// import styles from './DownloadDetail.css';
// import Table01Component from '../components/Table01';
// import DownloadDetailForm from '../components/DownloadDetailForm';
// function DownloadDetail({ location }) { 
//   return (
//     <div className={styles.normal}>
//       <Header location={location} />
//       <DownloadDetailForm/>     
//       <Table01Component/>
//     </div>
//   );
// }

// function mapStateToProps() {
//   return {};
// }

// export default connect(mapStateToProps)(DownloadDetail);
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
    this.state={collapsed:false}
  }  
  toggle(){    
    let collapsed=!this.state.collapsed;    
     this.setState({
      collapsed:collapsed
    })
    //触发另一个组件action
    this.props.dispatch({type:'sideMenu/collapsed',payload:{collapsed:collapsed}})
  }
  render() {
    return (
      <Layout>       
        <SideMenu />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed? 'menu-unfold' : 'menu-fold'}
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
function mapStateToProps() {
    return {};
}
// ReactDOM.render(<SiderDemo />, mountNode);
export default connect(mapStateToProps)(DownloadDetail);