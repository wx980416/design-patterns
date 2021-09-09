Function.prototype.bind = function () {
  // 还是要保存原函数
  var self = this;
  // 获取对象
  var context = [].shift.call(arguments);
  // 获取参数
  var args = [].slice.call(arguments);

  // 返回一个函数
  return function () {
    // 执行新函数的时候，会把之前传入的context当做新函数体内的this
    // 使用apply的原因：
    // 组合参数 args 第一次传入的, [].slice.call(arguments))第二次传入的
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};

var obj = {
  name: 'wangxin',
};

var fun = function (a, b, c, d) {
  console.log(this.name); // wangxin
  console.log([a, b, c, d]); // [ 1, 2, undefined, undefined ]
}.bind(obj, 1, 2);

fun();
