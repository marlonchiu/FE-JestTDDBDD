import demoFunction from './demo'
// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
// const Util = jest.fn()
// Util.a = jest.fn()
// Util.b = jest.fn()
import Util from './util'
jest.mock('./util.js')
// jest.mock('./util.js', () => {
//   const Util = jest.fn(() => {
//     // 可以自定义内部实现
//     console.log('init ---')
//   })
//   Util.prototype.a = jest.fn(() => {
//     console.log('a ---')
//   })
//   Util.prototype.b = jest.fn(() => {
//     console.log('b ---')
//   })

//   return Util
// })

test('should demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  // console.log(Util.mock)
  // console.log(Util.mock.instances[0])
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})

/**
 * 单元测试：只对自己的功能进行测试
 * 集成测试：对单元点下包括关联的依赖一起做测试
 */
