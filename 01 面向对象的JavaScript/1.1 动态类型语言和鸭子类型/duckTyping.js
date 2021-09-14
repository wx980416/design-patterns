// 鸭子类型
const duck = {
  duckSinging() {
    console.log('嘎嘎嘎'); // 会嘎嘎嘎
  },
};

const chicken = {
  duckSinging() {
    console.log('嘎嘎嘎'); // 会嘎嘎嘎
  },
};

const dog = {
  duckSinging() {
    console.log('嘎嘎嘎'); // 会嘎嘎嘎
  },
};
const choir = []; // 合唱团

const joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('加入了合唱团', animal);
    console.log('合唱团已有成员数量：' + choir.length);
  }
};

joinChoir(duck);
joinChoir(chicken);
joinChoir(dog);
