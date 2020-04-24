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
  // 2. 时间快进3s
  jest.advanceTimersByTime(8000)
  expect(fn).toHaveBeenCalledTimes(2)
})
