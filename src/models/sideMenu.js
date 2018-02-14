
export default {
  namespace: 'sideMenu',
  state: {collapsed: false,activeKey:'index'},
  reducers: {
    collapsed(state,{payload:collapsed}){     
      console.log('action:'+JSON.stringify(collapsed));    
      return {...state,collapsed:collapsed};     
    },  
    ChangeActiveKey(state,{payload:activeKey}){     
      return {activeKey}
    }
  },
  effects: {},
  subscriptions: {},
};
