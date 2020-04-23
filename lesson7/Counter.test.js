import Counter from './Counter'

let counter = null
beforeAll(() => {
  console.log('beforeAll')
})

afterAll(() => {
  console.log('afterAll')
})

beforeEach(() => {
  console.log('beforeEach')
  counter = new Counter()
})

afterEach(() => {
  console.log('afterEach')
})
describe('测试 Counter add 方法', () => {
  test('测试 Counter addOne 方法', () => {
    console.log('测试 Counter addOne 方法')
    counter.addOne()
    expect(counter.number).toBe(1)
  })
  test('测试 Counter addTwo 方法', () => {
    console.log('测试 Counter addTwo 方法')
    counter.addTwo()
    expect(counter.number).toBe(2)
  })
})
describe('测试 Counter minus 方法', () => {
  test('测试 Counter minusOne 方法', () => {
    console.log('测试 Counter minusOne 方法')
    counter.minusOne()
    expect(counter.number).toBe(-1)
  })
  test('测试 Counter minusTwo 方法', () => {
    console.log('测试 Counter minusTwo 方法')
    counter.minusTwo()
    expect(counter.number).toBe(-2)
  })
})
