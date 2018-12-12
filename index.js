const navigation = require('./util/navigation');

class PeaFormance {
  constructor(config, window) {
    this.config = config;
    if(window) {
      this.window = window;
    } else {
      console.error('没有找到 window 对象，插件不可用！');
    }
  }
  print(type) {
    if (this.window && this.window.performance) {
      switch(type) {
        case 'navigation': navigation.getNavigation(this.window.performance.timing, origin); break;
      }
    }
  }
}

module.exports = PeaFormance;
