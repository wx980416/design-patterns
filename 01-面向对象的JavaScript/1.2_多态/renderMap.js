const renderMap = function (map) {
  if (map.show() && map.show instanceof Function) {
    map.show(); // 行为
  }
};

const gooleMap = {
  show() {
    console.log('开始渲染谷歌地图'); // 结果
  },
};
const baiduMap = {
  show() {
    console.log('开始渲染百度地图');
  },
};

renderMap(gooleMap);
renderMap(baiduMap);
