import axios from 'axios'

// 1.
// export const fetchData = (fn) => {
//   axios.get('http://www.dell-lee.com/react/api/demo.json').then((res) => {
//     fn(res.data)
//   })
// }

// 2.
// export const fetchData = (fn) => {
//   return axios.get('http://www.dell-lee.com/react/api/demo.json')
// }

// 3.
export const fetchData = (fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}
