import * as loginServices from '../services/login.js';

export default {
  namespace: 'login',
  state: { isAuthorized: false },
  reducers: {
    //  { payload }接受的参数为 yield put({})中的对象action
    Authorized(state, { payload }) {
      sessionStorage.setItem('authorized', JSON.stringify(payload.isAuthorized));
      const re = { ...state, ...payload };
      console.log('re:' + JSON.stringify(re));
      return { ...state, ...payload };
    },
  },
  effects: {
    *loginRequest({ payload }, { call, put }) {
      const { data } = yield call(loginServices.loginRequest, payload);
      yield put({
        type: 'Authorized',
        payload: { isAuthorized: data.logined },
      });
    },
  },
  subscriptions: {},
};
