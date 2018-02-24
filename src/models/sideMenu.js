export default {
  namespace: 'sideMenu',
  state: { collapsed: false, activeKey: 'index' },
  reducers: {
    collapsed(state, { payload: collapsed }) {
      return { ...state, collapsed };
    },
    ChangeActiveKey(state, { payload: activeKey }) {
      return { activeKey };
    },
  },
  effects: {},
  subscriptions: {},
};
