import * as ss from '../services/table.js';

export default {
  namespace: 'table01',
  state: {
    list: [],
    loading: true,
    selectedRowKeysArr: [],
  },
  reducers: {
    querySuccess(state, { payload: { data: list } }) {
      return { ...state, list, loading: false };
    },
    selectedRowKeysReducer(state, { payload }) {
      return { ...state, selectedRowKeysArr: payload };
    },
  },
  effects: {
    // playload:{}这里可以传入参数 用于异步请求
    *tableData({ payload }, { call, put }) {
      // 返回的异步数据以{data:[]}这样的形式,下面将结果解构赋值
      // const isLogin = yield select(state => state.table01);
      // console.log('logincheck',isLogin);
      const { data } = yield call(ss.fetchTableData);
      yield put({
        type: 'querySuccess',
        payload: { data },
      });
    },
    *tableDataById({ payload: { values } }, { call, put }) {
      // 返回的异步数据以{data:[]}这样的形式,下面将结果解构赋值
      const { data } = yield call(ss.fetchTableDataById, values);
      yield put({
        type: 'querySuccess',
        payload: { data },
      });
    },
    *search({ payload }, { call, put }) {
      // 返回的异步数据以{data:[]}这样的形式,下面将结果解构赋值
      const { data } = yield call(ss.search, payload);
      yield put({
        type: 'querySuccess',
        payload: { data },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // query必须传入
      return history.listen(({ pathname, query }) => {
        if (pathname === '/downloadDetail' || pathname === '/') {
          // type:'tableData' 指异步的action
          dispatch({ type: 'tableData', payload: query });
        }
      });
    },
  },
};
