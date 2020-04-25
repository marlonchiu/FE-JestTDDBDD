import addDivToBody from './demo'
import $ from 'jquery'

test('测试 addDivToBody', () => {
  addDivToBody()
  addDivToBody()
  let len = $('body').find('div').length
  console.log(len)
  expect(len).toBe(2)
})

/** node
 * node 不具备 dom
 * jest 在 node 环境下 jest 在底层模拟了一套 dom api
 */
