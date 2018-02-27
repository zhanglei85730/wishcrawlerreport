import request from '../utils/request';
import Utils from '../utils/params.js';

export function fetchTableData() {
  // return request(`/api/tableData`);
  // return request(`/api/bills`);
  return request('/api/users');
}

export function fetchTableDataById(values) {
  const { id } = values;
  return request(`/api/billsSearch`);
}
// get请求
export function search(values) {
  return request(`/api/downloadDetail/search?${Utils.params(values)}`);
}


/* function postRequest(url) {
  //将"key1=value1&key2=valu2" 形式封装整FromData形式
  // 参数必须用FormData进行装载
  let formData = new FormData();
  formData.append("username", "hello");
  formData.append("password", "1111aaaa");

  var opts = {
    method: "POST",   //请求方法
    body: formData,   //请求体
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

  }

  fetch(url, opts)
    .then((response) => {
      //你可以在这个时候将Promise对象转换成json对象:response.json()
      //转换成json对象后return，给下一步的.then处理
      return response.text
    })
    .then((responseText) => {
      alert(responseText)
    })
    .catch((error) => {
      alert(error)
    })
} */
