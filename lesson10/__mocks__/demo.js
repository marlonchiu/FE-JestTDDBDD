export const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve("(function(){return '123'})()")
  })
}

// 假设返回数据是
// {
//   data: '(function(){return '123'})()'
// }
