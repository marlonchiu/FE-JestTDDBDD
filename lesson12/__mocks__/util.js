// const Util = jest.fn()
// Util.prototype.a = jest.fn()
// Util.prototype.b = jest.fn()
const Util = jest.fn(() => {
  // 可以自定义内部实现
  console.log('init')
})
Util.prototype.a = jest.fn(() => {
  console.log('a')
})
Util.prototype.b = jest.fn(() => {
  console.log('b')
})

export default Util
