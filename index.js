const navigation = require('./util/navigation');
const resource = require('./util/resource');

class PeaFormance {
  constructor(config, window) {
    this.config = config;
    if(window) {
      this.window = window;
    } else {
      console.error('没有找到 window 对象，插件不可用！');
    }
  }

  catchNavigationTimimg(callback=()=>{}) {
    try {
      let data = (this.window && this.window.performance) ?
        navigation.getTiming(this.window.performance.timing, origin) :
        {};
      callback(null, data);
    } catch(e) {
      callback(e, null);
    }
  }

  listenResourceLoad(node, callback=()=>{}) {
    try {
      node.addEventListener('load', function(event) {
        try {
          let data = (this.window && this.window.performance) ?
            resource.getInfo(this.window.performance, event.path[0].src) :
            {};
          callback(null, data);
        } catch(e) {
          callback(e, null);
        }
      }, true)
    } catch(e) {
      callback(e, null);
    }
  }
}

module.exports = PeaFormance;
