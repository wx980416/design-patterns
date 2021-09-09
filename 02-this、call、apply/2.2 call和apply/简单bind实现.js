Function.prototype.bind = function (obj) {
  let self = this; // 保存原函数
  // 返回一个新函数
  return function () {
    // 执行新的函数，把传入的 obj 当做新函数内部的this
    return self.apply(obj, arguments);
  };
};
var obj = {
  name: 'wangxin',
};
var fun = function () {
  console.log(this.name);
}.bind(obj);

fun(); // wangxin
