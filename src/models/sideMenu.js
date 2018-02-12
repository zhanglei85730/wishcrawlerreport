
export default {
  namespace: 'sideMenu',
  state: {collapsed: false,openKeys:['sub1']},
  reducers: {
    collapsed(state,{payload:collapsed}){
      console.log('OK:'+JSON.stringify(collapsed))
     // let {collapsed}=collapsed    
     console.log('actioni:collapsed')
      return {...state,collapsed}
    },  
    openKeys(state,{payload:openKeys}){
      console.log('actioni:openKeys')
      return {openKeys}
    }
  },
  effects: {},
  subscriptions: {},
};
