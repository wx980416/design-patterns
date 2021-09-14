// 通用函数柯里化
function currying(fn) {
  let args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      // 有值的时候不求值，进行保存
      ;[].push.apply(args, arguments) // 或者直接 args.push(arguments)
      return arguments.callee
    }
  }
}

// 要被 柯里化 的函数！！！可以是对任意数组元素进行处理的函数
var cost = (function () {
  var res = 0
  return function () {
    for (let i = 0, l = arguments.length; i < l; i++) {
      res += arguments[i]
    }
    return res
  }
})()

var cost = currying(cost)

cost(100)
cost(100)

console.log(cost()) // 200 需要求值时再，求值
