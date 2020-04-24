import axios from 'axios'

export const fetchData = () => {
  return axios.get('/').then(res => res.data)
}

// 假设返回数据是
// {
//   data: '(function(){return '123'})()'
// }

export const getNumber = () => {
  return 123
}
