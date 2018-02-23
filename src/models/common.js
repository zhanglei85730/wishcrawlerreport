export default {
  namespace: 'common',
  state: {
    breadcrumb: [
      {
        name: 'Wish财务报表',       
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
      let breadcrumbItem = '';
      if (/downloadDetail/.test(pathname)) {
        activeKey = 'downloadDetail';
        breadcrumbItem='下载详情';
      } else if (/ReportTetail/.test(pathname)) {
        activeKey = 'ReportTetail';
        breadcrumbItem='详情报表';
      }    
      return {...state, activeKey: activeKey,breadcrumb:[state.breadcrumb[0],{name:breadcrumbItem}]};
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