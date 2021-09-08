function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

var obj1 = new Person('obj1');
console.log(obj1.name); // obj1
console.log(obj1.getName()); // obj1

console.log('实现复杂new');
var objectNew = function () {
  var obj = new Object(); // 从Object.prototype上克隆一个空的对象
  Constructor = [].shift.call(arguments); // 调用数组的shift方法，取得外部传入的第一个参数，构造器
  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var res = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj设置属性

  return typeof res === 'object' ? res : obj; // 保证构造器总是返回一个对象
};

var obj2 = objectNew(Person, 'obj2');
console.log(obj2.name);
console.log(obj2.getName());
console.log(Object.getPrototypeOf(obj2) === Person.prototype);

console.log('简单实现new');
var simpleNew = function (Constructor) {
  var obj = {};
  obj.__proto__ = Constructor.prototype;
  return typeof obj === 'object' ? obj : {};
};
var obj3 = simpleNew(Person);
console.log(Object.getPrototypeOf(obj3) === Person.prototype); // true
