
export default {
  namespace: 'mainLayout',
  state: {
    iconCollapsed:false,
  },
  reducers: {
    changeIconCollapsed(state,{payload:iconCollapsed}){     
      //return {...state,iconCollapsed}
      const reulst = Object.assign({iconCollapsed:iconCollapsed})
      console.log('action-=>reulst='+JSON.stringify(reulst))
      return reulst
    }
  },
  effects: {},
  subscriptions: {},
};
