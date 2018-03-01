const Mock = require('mockjs');

let db = Mock.mock({
  'data|30-66': [{
    // 'fileName': '@id',
    // 'departName': '@name',
    // 'accountCode|18-32': 1,
    'fileName|1': ['小包-wish品类组', ' 小包-wish账号组', ' 小包-wish账号组'],
    'departName|1': ['小包-义乌A组', ' 小包-wish账号组', ' 小包-义乌B组'],
    'accountCode|1': ['onemoregood', 'Shuibaobao', 'spacecraft'],
    'reportStatus|1': Boolean,
    'accountCode|1': ['onemoregood', 'Shuibaobao', 'spacecraft'],
    'createdTimeStamp|1': ['2017-10-20', '2015-05-10', '2016-05-28'],
    'userName|1': ['onemoregood', 'Shuibaobao', 'spacecraft'],
    'verifyDate|1': ['2017-10-20', '2015-05-10', '2016-05-28'],
    'id|1': '@id',
  }],
});

module.exports = {
  ['GET /api/users'](req, res) {
    res.status(200).json(db);
  },
  //get方式根据查询条件返回数据
  ['GET /api/downloadDetail/search'](req, res) {
    const accounts = req.query.accounts;
    const responseData = db.data.filter((item) => {
      if (item.accountCode === accounts) {
        return item;
      }
    });
    res.status(200).json({ data: responseData });
  },
  ['POST /api/users'](req, res) {
    let user = req.body;
    console.log(req);
    user.id = Mock.mock('@id');
    db.data.push(user);
    res.status(200).json(user);
  },
  // 登录模拟
  ['get /api/login'](req, res) {
    const { userName, password } = req.query;
    const isAuthorized = (userName === 'zl' && password === '30') ? true : false;
    res.status(200).json({ logined: isAuthorized });
  },
};
