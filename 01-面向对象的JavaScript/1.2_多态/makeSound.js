// 不变的部分单独隔离出来
const makeSound = function (animal) {
  animal.sound();
};

// 可变的部分封装
const Duck = function () {};
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎');
};

const Dog = function () {};
Dog.prototype.sound = function () {
  console.log('汪汪汪');
};

// 追加就行
const People = function () {};
People.prototype.sound = function () {
  console.log('您好啊');
};

// 执行操作
makeSound(new Duck());
makeSound(new Dog());
makeSound(new People());
