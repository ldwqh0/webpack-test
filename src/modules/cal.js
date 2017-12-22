export default {
  getSum (...arg) {
    let sum = 0
    for (let v of arg) {
      sum += v
    }
    return sum
  }
}
