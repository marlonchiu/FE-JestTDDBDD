/*
 *  Created by : ZhaoJiandong
 *  Modified time: 2020/4/23 17:22
 */

// let result = add(3, 7)
// let expected = 10
// if (result !== 10) {
//   throw Error(`3 + 7 应该等于 ${expected}, 结果确是 ${result}`)
// }

function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw Error(`预期值与实际值不相等 预期${actual} 结果却是${result}`)
      }
    }
  }
}

function test (desc, fn) {
  try {
    fn()
    console.log(`${desc} 通过测试`)
  } catch (error) {
    console.log(`${desc} 没有通过测试 ${error}`)
  }
}

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})
test('测试减法 3 - 7', () => {
  expect(minus(3, 7)).toBe(-14)
})
test('测试乘法 3 * 7', () => {
  expect(multi(3, 7)).toBe(21)
})
