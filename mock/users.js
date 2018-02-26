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
    // setTimeout((function(res,db){
    //     res.status(200).json(db);
    // })(res,db),1000)
  },
  ['POST /api/users'](req, res) {
    let user = req.body;
    console.log(req);
    user.id = Mock.mock('@id');
    db.data.push(user);
    res.status(200).json(user);
  },
};
