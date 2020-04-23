test('toBe', () => {
  expect(10).toBe(10)
})

test('toMatch', () => {
  expect('team').not.toMatch(/I/)
})

function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('toThrow', () => {
  expect(compileAndroidCode).toThrow()
})
