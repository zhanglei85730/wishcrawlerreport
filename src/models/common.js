export default {
  namespace: 'common',
  state: {
    breadcrumb: [
      {
        name: '首页',
        path: '/'
      }
    ],
    activeKey: 0,
  },
  reducers: {
    changeBreadcrumb(state, { payload: breadcrumb }) {
      return { ...state, ...breadcrumb }
    },
    updateActiveIndex(state, action){
      let pathname = action.payload;
      let activeKey = 0;
      if (/downloadDetail/.test(pathname)) {
        activeKey = 'downloadDetail';
      } else if (/ReportTetail/.test(pathname)) {
        activeKey = 'ReportTetail';
      }     
      return {...state, activeKey: activeKey};
  }
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        dispatch({
          type: 'updateActiveIndex',
          payload: location.pathname
        });
      });
    },
  },
}