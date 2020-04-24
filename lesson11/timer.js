export default (callback) => {
  setTimeout(() => {
    callback()
    setTimeout(() => {
      console.log(123)
      callback()
    }, 4000)
  }, 3000)
}
