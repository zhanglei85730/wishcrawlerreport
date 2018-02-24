export default {
  namespace: 'mainLayout',
  state: {
    iconCollapsed: false,
  },
  reducers: {
    changeIconCollapsed(state, { payload: iconCollapsed }) {
      // return {...state,iconCollapsed}
      const reulst = Object.assign({ iconCollapsed });     
      return reulst;
    },
  },
  effects: {},
  subscriptions: {},
};
