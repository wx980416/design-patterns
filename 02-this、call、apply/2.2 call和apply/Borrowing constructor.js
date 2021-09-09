// 借用构造函数 borrowing constructor
(function () {
  console.log(arguments); // { '0': 1, '1': 2 }
  Array.prototype.push.call(arguments, 3, 4);
  console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1, 2);

// 要想借用构造函数
// 对象本身可可以存取属性
// 对象的length属性可以读取

var num = 1;
Array.prototype.push.call(num, '111');
console.log(num.length); // undefined
console.log(num[0]); // 1
console.log(num); // 1
