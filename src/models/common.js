export default {
  namespace: 'common',
  state: {
    breadcrumb: [
      {
        name: 'Wish财务报表',
      },
    ],
    activeKey: 0,
  },
  reducers: {
    changeBreadcrumb(state, { payload: breadcrumb }) {
      return { ...state, ...breadcrumb };
    },
    updateActiveIndex(state, action) {
      const pathname = action.payload;
      let activeKeyValue = 0;
      let breadcrumbItem = '';
      if (/downloadDetail/.test(pathname)) {
        activeKeyValue = 'downloadDetail';
        breadcrumbItem = '下载详情';
      } else if (/ReportTetail/.test(pathname)) {
        activeKeyValue = 'ReportTetail';
        breadcrumbItem = '详情报表';
      }
      return {
        ...state,
        activeKey: activeKeyValue,
        breadcrumb: [state.breadcrumb[0],
        { name: breadcrumbItem }],
      };
    },
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateActiveIndex',
          payload: location.pathname,
        });
      });
    },
  },
};

