import request from '../utils/request';

export function fetchTableData() {
  console.log('fefw')
  //return request(`/api/tableData`);
  //return request(`/api/bills`);
  return request(`/api/users`);
}

export function fetchTableDataById(values) {
  console.log('server:'+values.id) 
  let {id}=values;
  return request(`http://localhost:3000/billsSearch?id=`+id);
}