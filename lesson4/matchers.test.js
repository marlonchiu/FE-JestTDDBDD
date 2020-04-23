test('测试10与10相匹配', () => {
  // toBe 相当于 object.is ===
  expect(10).toBe(10)
})

test('测试对象内容相等', () => {
  // toEqual 匹配内容相等
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})

test('toBeNull 匹配器', () => {
  const b = null
  expect(b).toBeNull()
})

test('测试 toBeUndefined 匹配器', () => {
  const c = undefined
  expect(c).toBeUndefined()
})

// toBeNull
// toBeDefined
// toBeUndefined
// toBeTruthy
// toBeFalsy
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

/**
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 * toBeLessThan
 * toBeLessThanOrEqual
 * toBe / toEqual
 * toBeCloseTo
 */
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3);  // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

/**
 * toMatch
 */
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

/**
 * toContain
 */
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

/**
 * toThrow
 */
function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})
