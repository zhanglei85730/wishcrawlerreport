import DownloadDetail from '../routes/DownloadDetail';
import ReportTetail from '../routes/ReportTetail.js';
import Deduct from '../routes/Deduct.js';
import TransactionMoney from '../routes/TransactionMoney.js';
import ReleaseDeduct from '../routes/ReleaseDeduct.js';
import Login from '../routes/Login.js';

const pageStyle = {
  fontColor: { color: '#333' },
  fontSize: { fontSize: '20px' }
};
const { fontColor, fontSize } = pageStyle;
const titleCss = Object.assign(fontColor, fontSize);
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div style={titleCss} > 下载详情</div >,
    main: DownloadDetail,
  },
  {
    path: '/downloadDetail',
    exact: true,
    sidebar: () => <div style={titleCss} > 下载详情</div >,
    main: DownloadDetail,
  },
  {
    path: '/reportTetail',
    sidebar: () => <div style={titleCss}>报表详情</div>,
    main: ReportTetail,
  },
  {
    path: '/deduct',
    sidebar: () => <div style={titleCss}>报表详情</div>,
    main: Deduct,
  },
  {
    path: '/transactionMoney',
    sidebar: () => <div style={titleCss}>交易款项</div>,
    main: TransactionMoney,
  },
  {
    path: '/releaseDeduct',
    sidebar: () => <div style={titleCss}>释放扣款数</div>,
    main: ReleaseDeduct,
  },
  {
    path: '/login',
    sidebar: () => <div style={titleCss}>登录</div>,
    main: Login,
  },
];

export default routes;
