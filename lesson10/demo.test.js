import { fetchData } from './demo'
// 1.直接 使用创建的__mock__ 模拟
jest.mock('./demo')
// jest.unmock('./demo')
// import Axios from 'axios'
// jest.mock('axios')
// requireActual 使用真正的的请求
const { getNumber } = jest.requireActual('./demo')

// 2.打开jest.config.js Line 6 automock: true,
// 项目需要重启

test('fetchData 测试', () => {
  // Axios.get.mockResolvedValue({
  //   data: "(function(){return '123'})()"
  // })
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})

test('getNumber 测试', () => {
  expect(getNumber()).toBe(123)
})
