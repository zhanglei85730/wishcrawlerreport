import DownloadDetail from '../routes/DownloadDetail';
import ReportTetail from '../routes/ReportTetail.js';
import Deduct from '../routes/Deduct.js';
import TransactionMoney from '../routes/TransactionMoney.js';

const pageStyle = {
  fontColor: { color: '#333' },
  fontSize: { fontSize: '20px' }
};
const { fontColor, fontSize } = pageStyle;
const titleCss = Object.assign(fontColor, fontSize);
const routes = [
  {
    path: '/downloadDetail',
    exact: true,
    sidebar: () => <div style={titleCss} > 下载详情</div >,
    main: DownloadDetail,
  },
  {
    path: '/ReportTetail',
    sidebar: () => <div style={titleCss}>详情报告</div>,
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
];

export default routes;
