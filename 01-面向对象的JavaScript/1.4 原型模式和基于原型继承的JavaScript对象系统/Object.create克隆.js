var LOL_dogface = function () {
  this.blood = 100;
  this.color = 'red';
};
// 实例化一个小兵对象
var dogface = new LOL_dogface();
dogface.blood = 700;
dogface.color = 'blue';

// 基于Object.create方法克隆对象
var cloneDogface = Object.create(dogface);
console.log(cloneDogface.blood);
console.log(cloneDogface.color);

// Object.create实现原理
Object.create = function (obj) {
  var F = function () {};
  F.prototype = obj; // 修改函数的原型
  return new F(); // 返回新的构造函数
};
var cloneDogface2 = Object.create(dogface);
console.log(cloneDogface2.blood);
