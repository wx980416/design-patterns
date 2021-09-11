var sum = (function () {
  var cache = {} // 缓存
  var getSum = function () {
    let a = 0
    for (let i = 0; i < arguments.length; i++) {
      a += arguments[i]
    }
    return a
  }

  return function () {
    let args = Array.prototype.join.call(arguments, ',')

    if (args in cache) {
      return cache[args]
    }

    return (cache[args] = getSum.apply(null, arguments))
  }
})()

console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3)) // 6
