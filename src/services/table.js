import request from '../utils/request';

export function fetchTableData() {
  // return request(`/api/tableData`);
  // return request(`/api/bills`);
  return request('/api/users');
}

export function fetchTableDataById(values) {
  const { id } = values;
  return request('http://localhost:3000/billsSearch?id=' + id);
}
