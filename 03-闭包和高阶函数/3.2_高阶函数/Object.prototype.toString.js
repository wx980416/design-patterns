var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']'
  }
}

var isString = isType('String')
var isArray = isType('Array')
var isNumber = isType('Number')

console.log(isString('1212'))
console.log(isArray([1]))
console.log(isNumber(1))

var Type = {}
