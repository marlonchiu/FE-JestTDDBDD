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

### Jest 配置(2-3)

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
