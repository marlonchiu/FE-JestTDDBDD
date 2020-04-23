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