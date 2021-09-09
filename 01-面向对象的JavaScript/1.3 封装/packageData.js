const myObject = (function () {
  const _name = '王鑫'; // 私有（private）变量
  return {
    getName: function () {
      return _name; // 公开（public）变量
    },
  };
})();
console.log(myObject._name);
console.log(myObject.getName());

Object.create =
  Object.create ||
  function (obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
  };
