import { runCallback, createObject } from './demo'

test('测试 runCallback', () => {
  // mock 函数，捕获函数的调用和返回结果，以及this和调用顺序
  const func = jest.fn()

  // 定义每次执行的返回结果
  // const func = jest.fn(() => {
  //   return '245'
  // })

  // 每次返回的结果  2.可以让我们自由的设置返回结果
  // func.mockReturnValue(42)

  // 一次调用的结果
  func.mockReturnValueOnce(42)
  func.mockReturnValueOnce('dell').mockReturnValueOnce('hello')

  runCallback(func)
  runCallback(func)
  runCallback(func)
  expect(func).toHaveBeenCalled() // 函数被调用
  expect(func.mock.calls.length).toBe(3) // 函数被调用几次
  expect(func.mock.results[2].value).toEqual('hello')
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
