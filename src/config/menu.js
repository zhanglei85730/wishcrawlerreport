const menuData = [
  {
    name: '下载详情',
    icon: 'download',
    path: '/downloadDetail',
    key: 'downloadDetail',
  },
  {
    name: '详情报表',
    icon: 'profile',
    path: '/reportTetail',
    key: 'reportTetail',
  },
  {
    name: '报表明细',
    icon: 'file-text',
    path: '/reportList',
    key: 'reportList',
    children: [
      {
        name: '交易款项',
        icon: ' ',
        parentName: '报表明细',
        path: '/transactionMoney',
        key: 'transactionMoney',
      },
      {
        name: '扣除数额',
        icon: '',
        path: '/deduct',
        parentName: '报表明细',
        key: 'deduct',
      },
      {
        name: '释放暂扣款',
        icon: '',
        parentName: '报表明细',
        path: '/releaseDeduct',
        key: 'releaseDeduct',
      },
    ],
  },
  {
    name: '财务EAS凭证',
    icon: 'pay-circle-o',
    path: '/summary',
    key: 'summary',
  },
];

export default menuData;
