import menuData from '../config/menu.js';


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
      const activeKeyValue = 'downloadDetail';
      // let breadcrumbItem = '';
      const breadcrumbArr = [];
      // 生成层级面包削方法
      function breadcrumb(node) {
        node.map((item) => {
          if (item.hasOwnProperty('children')) {
            breadcrumb(item.children);
          } else {
            // breadcrumbItem = node.name;
            if (pathname === item.path) {
              if (item.hasOwnProperty('parentName')) {
                breadcrumbArr.push({ name: item.parentName }, { name: item.name });
              } else {
                breadcrumbArr.push({ name: item.name });
              }
            }
          }
        });
      }
      breadcrumb(menuData);
      return {
        ...state,
        activeKey: activeKeyValue,
        breadcrumb: [state.breadcrumb[0], ...breadcrumbArr],
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

