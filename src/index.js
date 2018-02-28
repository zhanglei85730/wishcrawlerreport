import dva from 'dva';
// import { browserHistory } from 'dva/router';
// hashHistory改为browserHistory(地址栏无#)
import createHistory from 'history/createBrowserHistory';
import './index.css';


// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
  // history: browserHistory(),
});

app.model(require('./models/table01'));
app.model(require('./models/sideMenu'));
app.model(require('./models/downloadDetail'));
app.model(require('./models/mainLayout'));
app.model(require('./models/common.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

// import dva from 'dva';
// import { browserHistory } from 'dva/router';
// import createLoading from 'dva-loading';
// import { message } from 'antd';
// import './index.html';
// import './index.css';

// const ERROR_MSG_DURATION = 3; // 3 秒

// // 1. Initialize
// const app = dva({
//   history: browserHistory,
//   onError(e) {
//     message.error(e.message, ERROR_MSG_DURATION);
//   },
// });
// // 2. Plugins
// app.use(createLoading());
// app.model(require('./models/DownloadDetail'));
// // 3. Model
// // Moved to router.js
// // 4. Router
// app.router(require('./router'));

// // 5. Start
// app.start('#root');
