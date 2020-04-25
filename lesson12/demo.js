import Util from './util'

const demoFunction = (a, b) => {
  const util = new Util()
  // 模拟调用了 a b function
  util.a(a)
  util.b(b)
}

export default demoFunction
