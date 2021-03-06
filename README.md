# FE-JestTDDBDD

慕课网 | 前端JestTDDBDD测试

## Jest

## Jest介绍(2-2)
测试框架应该满足：性能、功能、易用性

* 速度快
* API丰富
* 易配置
* 隔离性好
* 监控模式
* IDE整合
* Snapshot
* 多项目并行
* 覆盖率
* Mock丰富

### Jest 配置(2-4)

* `npx jest --init` 可以暴露jest 的默认配置 生成一个 `jest.config.js` 的文件。参见目录 lesson3
* `npx jest --coverage` 测试覆盖率说明
  
  ```bash
    ----------|---------|----------|---------|---------|-------------------
    File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ----------|---------|----------|---------|---------|-------------------
    All files |     100 |      100 |     100 |     100 |                   
     math.js  |     100 |      100 |     100 |     100 |                   
    ----------|---------|----------|---------|---------|-------------------
  ```
  
  同时会生成一个 `coverage` 的目录。`lesson3\coverage\lcov-report\index.html` 可以查看测试覆盖率报告

* jest 是不支持 es module 的代码的，只支持commonjs。需要进行babel转换
  * 安装转换依赖 `npm i @babel/core@7.4.5 @babel/preset-env@7.4.5 -D`
  * 配置 `.babelrc`
    
        ```js
        {
          "presets": [
            ["@babel/preset-env", {
              "targets": {
                "node": "current"
              }
            }]
          ]
        }
        ```
* 实现原理：
  * 执行 `npm run test`，运行`jest`，其内部集成插件`babel-jest`
  * 该插件会检查当前环境是否安装了 `@babel/core`，如果安装就会读取 `.babelrc` 的配置
  * 在运行测试之前，结合babel，先把代码转换为commonjs语法
  * 运行的是转换过的测试代码

### Jest 匹配器 matchers(2-5) 

* 修改监听

    ```json
    "scripts": {
       "test": "jest --watchAll",
     },
    ```
* 匹配器
    > [匹配器](https://jestjs.io/docs/en/using-matchers)
* Common Matchers
    * toBe
    * toEqual

* Truthiness
    * toBeNull
    * toBeDefined
    * toBeUndefined
    * toBeTruthy
    * toBeFalsy
 
* Numbers
    * toBeGreaterThan
    * toBeGreaterThanOrEqual
    * toBeLessThan
    * toBeLessThanOrEqual
    * toBe / toEqual
    * toBeCloseTo
 
* Strings
    * toMatch
 
* Arrays and iterables
    * toContain
 
* Exceptions
    * toThrow

### Jest 命令行工具(2-6)

* Press a to run all tests.
* Press o to only run tests related to changed files.  // 必须关联git
* Press f to quit "only failed tests" mode.
* Press p to filter by a filename regex pattern. 
* Press t to filter by a test name regex pattern.  // 匹配某个 desc
* Press q to quit watch mode.
* Press Enter to trigger a test run.

* `jest --watch` 默认进入的是 o 模式

### Jest 异步代码的测试方法(2-7 2-8)

几种用法：
```js
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
```

异步函数的测试方法很多，根据自己的选择就可以，适合就好！

### Jest 钩子函数(2-9 2-10)

> [钩子函数](https://jestjs.io/docs/en/api)

* beforeAll：在所有测试用例执行前调用
* afterAll：在所有测试用例执行后调用
* beforeEach：在每一个测试用例执行前调用
* afterEach：在每一个测试用例执行后调用
* describe: 分组测试

每个describe都有自己的作用域且互不影响。对于其执行的逻辑一定要放在钩子函数中
`test.only` 只执行某一个测试用例，其他skipped

### Jest 中的 Mock(2-11 2-12)

* 生成mock函数
    * `const func = jest.fn()`
* mock 函数作用
    * 1、 捕获函数的调用和返回结果，以及this和调用顺序
    * 2、 可以让我们自由的设置返回结果
    * 3、 改变函数的内部实现
 * API:
    * `mockReturnValue`
    * `mockReturnValueOnce`
    *
    * `mockImplementation`
    * `mockImplementationOnce`
    *
    * `mockResolvedValue`
    * `mockResolvedValueOnce`
    *
    * `mockReturnThis`


```js
// demo.test.js
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
```

### snapshot 快照测试(3-1)

* toMatchSnapshot 生成快照文件夹`__snapshots__`
* toMatchInlineSnapshot  行内快照
  * 对于变化的配置量 `Snapshot({ time2: expect.any(Date)})`
  * 同样可以接收 `Date | String | Number`
* 示例：

```js
test('should generateAnotherConfig 函数', () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time2: expect.any(Date)
  })
})
```

### mock 深入学习(3-2)

* > [Mock Functions](https://jestjs.io/docs/en/mock-function-api)
* > [The Jest Object](https://jestjs.io/docs/en/jest-object)
* 本地去模拟`axios`请求

* 实现方法
  * 1.直接 使用创建的 `__mock__` 模拟
  * 2.打开`jest.config.js` Line 6 automock: true,
* 具体代码 目录 `lesson10`

### mock timers(3-3)

> [mock-timers](https://jestjs.io/docs/en/jest-object#mock-timers)

* API
  * jest.useFakeTimers()
  * 避免定时器等待时间
    * jest.runAllTimers()  执行所有的timers
    * jest.runOnlyPendingTimers()  只执行当前队列中的timers
    * jest.advanceTimersByTime(msToRun)  时间快进多少
* 代码
    ```js
    import timer from './timer'
    // jest.useFakeTimers()
    
    // test('timer 测试', (done) => {
    //   timer(() => {
    //     expect(1).toBe(1)
    //     done()
    //   })
    // })
    
    beforeEach(() => {
      jest.useFakeTimers()
    })
    
    // 2. jest.useFakeTimers()
    test('timer 测试', () => {
      const fn = jest.fn()
      timer(fn)
      // 避免定时器等待时间
      // 1. 执行所有的timers
      // jest.runAllTimers()
      // 2. 只执行当前队列中的timers
      // jest.runOnlyPendingTimers()
      // 3. 时间快进3s
      jest.advanceTimersByTime(8000)
      expect(fn).toHaveBeenCalledTimes(2)
    })
    ```
  
### ES6 中类的测试(3-4)

jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()

### Jest  中对 DOM 节点操作的测试(3-5)

* 测试 DOM 要记得把测试环境设为浏览器环境，jest 在底层模拟了一套 dom api

```
// jest.config.js  Line 135
{
  // testEnvironment: "node",
  testEnvironment: "jest-environment-jsdom",
}
```

* 测试代码

```js
// demo.js
import $ from 'jquery'

const addDivToBody = () => {
  $('body').append('<div/>')
}

export default addDivToBody

// demo.test.js
import addDivToBody from './demo'
import $ from 'jquery'

test('测试 addDivToBody', () => {
  addDivToBody()
  addDivToBody()
  let len = $('body').find('div').length
  console.log(len)
  expect(len).toBe(2)
})
```
### 总结

* Jest 常用的方法大概就是上述这些，我们需要明确集成测试和单元测试两个不同的概念
* 单元测试只能保证当个功能，如果我们测试一个项目，无法确保各个功能之间的依赖没有问题
*　集成测试，可以让我们站在业务流程的角度来进行测试，以确保这个流程是没有问题的
×　单元测试特别适用于单个函数的测试，因为就只有入参和返回值
