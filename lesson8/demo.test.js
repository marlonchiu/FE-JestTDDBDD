import { runCallback, createObject, getData } from './demo'
import axios from 'axios'
jest.mock('axios')

/**
 * mock 函数作用
 *
 * 1. 捕获函数的调用和返回结果，以及this和调用顺序
 * 2.可以让我们自由的设置返回结果
 * 3. 改变函数的内部实现
 *
 * API:
 *   mockReturnValue
 *   mockReturnValueOnce
 *
 *   mockImplementation
 *   mockImplementationOnce
 *
 *   mockResolvedValue
 *   mockResolvedValueOnce
 *
 *   mockReturnThis
 *
 *  匹配器
 *   toHaveBeenCalledWith( arg1, arg2, ....)
 *   toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
 *   toHaveBeenLastCalledWith(arg1, arg2, ....)
 *  */

test.only('测试 runCallback', () => {
  // mock 函数，1. 捕获函数的调用和返回结果，以及this和调用顺序
  const func = jest.fn()

  // 定义每次执行的返回结果
  // const func = jest.fn(() => {
  //   return '245'
  // })

  // 每次返回的结果  2.可以让我们自由的设置返回结果
  // func.mockReturnValue(42)
  func.mockImplementation(() => {
    console.log('123')
    return '245'
    // return this
  }) // 等价于 上边 jest.fn(() => {return '245' })

  // func.mockReturnThis()

  // func.mockImplementationOnce(() => {
  //   return 42
  // })

  // 一次调用的结果
  // func.mockReturnValueOnce(42)
  // func.mockReturnValueOnce('dell').mockReturnValueOnce('hello')

  runCallback(func)
  runCallback(func)
  runCallback(func)
  expect(func).toHaveBeenCalled() // 函数被调用
  // expect(func.mock.calls.length).toBe(3) // 函数被调用几次
  // expect(func.mock.calls[0]).toEqual(['hello'])
  expect(func).toHaveBeenCalledWith('hello')
  expect(func).toHaveBeenNthCalledWith(1, 'hello')
  // expect(func.mock.results[2].value).toEqual('hello')
  console.log(func.mock)
})

/**
 * func.mock 执行的结果
    {
      calls: [ [], [] ],
      instances: [ undefined, undefined ],
      invocationCallOrder: [ 1, 2 ],
      results: [
        { type: 'return', value: undefined },
        { type: 'return', value: undefined }
      ]
    }
 */

test('测试 createObject', () => {
  const mockFn = jest.fn()
  createObject(mockFn)
  console.log(mockFn.mock) // mockConstructor {}
})

test('测试 getData', async () => {
  // 3. 第三个用处是改变函数的内部实现
  // axios.get.mockResolvedValue({ data: 43 })
  axios.get.mockResolvedValueOnce({ data: 43 })
  axios.get.mockResolvedValueOnce({ data: 'hello' })

  await getData().then((data) => {
    expect(data).toBe(43)
  })
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
})
