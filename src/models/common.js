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
      let activeKeyValue = 'downloadDetail';
      let breadcrumbItem = '';
      if (/downloadDetail/.test(pathname)) {
        activeKeyValue = 'downloadDetail';
        breadcrumbItem = '下载详情';
      } else if (/reportTetail/.test(pathname)) {
        activeKeyValue = 'reportTetail';
        breadcrumbItem = '详情报表';
      } else if (/transactionMoney/.test(pathname)) {
        activeKeyValue = 'transactionMoney';
        breadcrumbItem = '交易款项';
      } else if (/deduct/.test(pathname)) {
        activeKeyValue = 'deduct';
        breadcrumbItem = '扣除数额';
      } else if (/releaseDeduct/.test(pathname)) {
        activeKeyValue = 'releaseDeduct';
        breadcrumbItem = '释放暂扣款';
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
