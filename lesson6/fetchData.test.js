import { fetchData } from './fetchData'

// 1. 回调类型异步函数的测试
// test('fetchData 返回结果为 {success: true}', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success: true
//     })
//     done()
//   })
// })

// 2. 直接返回的 Promise
// test('fetchData 返回结果为 {success: true}', () => {
//   return fetchData().then((response) => {
//     expect(response.data).toEqual({
//       success: true
//     })
//   })
// })

// 3. 直接返回的 Promise
// test('fetchData 返回结果为 404', () => {
//   // 要求 expect 语法必须执行一次
//   expect.assertions(1)
//   return fetchData().catch((e) => {
//     // console.log(e.toString()) // Error: Request failed with status code 404
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// 4.
// test('fetchData 返回结果为 {success: true}', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// 5.
// test('fetchData 返回结果为 404', () => {
//   return expect(fetchData()).rejects.toThrow()
// })

// 6.
// test('fetchData 返回结果为 {success: true}', async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// 7.
// test('fetchData 返回结果为 404', async () => {
//   await expect(fetchData()).rejects.toThrow()
// })

// 8.
// test('fetchData 返回结果为 {success: true}', async () => {
//   const response = await fetchData()
//   expect(response.data).toEqual({
//     success: true
//   })
// })

// 9.
test('fetchData 返回结果为 404', async () => {
  expect.assertions(1)
  try {
    await fetchData()
  } catch (error) {
    // console.log(error.toString())
    expect(error.toString()).toEqual('Error: Request failed with status code 404')
  }
})
