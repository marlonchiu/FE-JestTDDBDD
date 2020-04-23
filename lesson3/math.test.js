import { add, minus, multi } from './math.js'

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})
test('测试减法 3 - 7', () => {
  expect(minus(3, 7)).toBe(-4)
})
test('测试乘法 3 * 7', () => {
  expect(multi(3, 7)).toBe(21)
})

// 单元测试 集成测试
// 模块测试 多个模块测试
