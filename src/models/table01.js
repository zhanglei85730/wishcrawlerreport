import * as ss from '../services/table01.js';
export default {
  namespace: 'table01',
  state: {
    list:[]
  },
  reducers: {
    querySuccess(state,{payload:{data:list}}){      
      return {...state,list}
    }
  },
  effects: {
    //playload:{}这里可以传入参数 用于异步请求
    *tableData({payload}, {select,call, put}){
      //返回的异步数据以{data:[]}这样的形式,下面将结果解构赋值
      const isLogin = yield select(state => state.table01);
      //console.log('logincheck',isLogin);
      let {data} = yield call(ss.fetchTableData);     
      yield put({
        type: 'querySuccess',
        payload:{data}
      });
    },
    *tableDataById({payload:{values}}, {select,call, put}){      
      //返回的异步数据以{data:[]}这样的形式,下面将结果解构赋值       
      let {data} = yield call(ss.fetchTableDataById,values);
      yield put({
        type: 'querySuccess',
        payload:{data}
      });
    }
  },
  subscriptions: {
    setup({dispatch,history}) {
      //query必须传入    
      return history.listen(({ pathname,query}) => {
        if (pathname === '/downloadDetail') {         
          //type:'tableData' 指异步的action   
           dispatch({type:'tableData',payload:query});
        }
      });
    },
  }
};
