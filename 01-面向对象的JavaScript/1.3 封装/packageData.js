const myObject = (function () {
  const _name = 'wx'; // 私有（private）变量
  return {
    getName: function () {
      return _name; // 公开（public）变量
    },
  };
})();
console.log(myObject._name); // undefined 访问不到
console.log(myObject.getName()); // wx 可以访问
