
export default {
  namespace: 'downloadDetail',
  state: {
    iconCollapsed:false,
  },
  reducers: {
    changeIconCollapsed(state,{payload:iconCollapsed}){
      //console.log('Object.assign(state,{iconCollapsed:iconCollapsed}='+JSON.stringify(Object.assign(state,{iconCollapsed}))     
      //return Object.assign(state,{iconCollapsed})
      return {...state,iconCollapsed}
    }
  },
  effects: {},
  subscriptions: {},
};
