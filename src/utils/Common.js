export default {


  /**
   * 获取Url中的参数
   */
  getParamFormUrl: (key, host) => {
    let arr;
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    try {
      let testHost = window.location.href;
      if (host) {
        testHost = host;
      }
      if ((arr = testHost.split('?')[1].match(reg))) {
        return decodeURI(arr[2]);
      }
    } catch (e) {
    }
    return '';
  },


  /**
   * 分页配置
   * @return {}
   */
  pagination: () => {
    return {
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '30', '50'],
      current: 1,
      showTotal: (total, current) => {
        return "共 " + total + ' 条数据';
      }
    }
  },

  /**
   * 是否为空
   * @param value
   * @returns {boolean}
   */
  isEmpty: (value) => {
    return value === undefined || value === null || value === '';
  },

  /**
   * 判断是否开始
   * @param value
   * @param start
   */
  startWidth: (value = '', start = '') => {
    return value.substr(0, start.length) === start;
  },

  /**
   * 设置默认值
   * @param value
   * @param def
   */
  initValue: (value, def) => {
    return (value === undefined || value === null || value === '') ? def : value;
  },


  /**
   * 转换为json
   * @param value
   * @param def
   */
  parseJSON: (value, def = {}) => {
    let obj;
    try {
      obj = JSON.parse(value);
    } catch (e) {
    }
    if (!obj) {
      obj = def;
    }
    return obj;
  },


  /**
   * 将array中的某个key用sep连接起来
   * @param array
   * @param key
   * @param sep
   */
  arrayKeys: (array = [], key = 'id', sep = ',') => {
    let result = '';
    array.forEach(item => {
      if (typeof item === 'object') {
        result = result + item[key];
      } else {
        result = result + item;
      }
      result = result + sep;
    });
    result = result.substring(0, result.length - sep.length);
    return result;
  },

  /**
   * 合并数据
   * @param obj
   * @param val
   */
  mergeObj: (obj, val) => {
    return {...obj, ...val};
  },


  /**
   * 获取文件的后缀
   * @param fileName
   * @return {*}
   */
  getFileExt: (fileName) => {
    let array = fileName.split('.');
    return '.' + array[array.length - 1];
  },


  /**
   * 分割对象
   * @param obj
   * @param sep
   */
  splitObj: (obj, sep = ',') => {
    if (obj) {
      return obj.split(sep);
    }
    return [];
  },


  /**
   * 获取当前的hash路径
   */
  getCurrentHash: () => {
    return window.location.hash.replace('#', '');
  },

  /**
   * 上传图片
   */
  uploadFile: (file) => {
    return new Promise((resolve, reject) => {
      let fileData = new FormData();
      fileData.append('file', file);
      let request = new XMLHttpRequest();
      request.open("POST", "/tools/File/upload_file_local");
      request.onreadystatechange = ev => {
        if (ev.currentTarget.readyState === 4) {
          let res = JSON.parse(ev.currentTarget.responseText);
          resolve(res);
        }
      };
      request.send(fileData);
    });
  },


  getWidth: (value) => {
    let winHeight = 0;
    let winWidth = 0;
    //获取窗口宽度
    if (window.innerWidth)
      winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
      winWidth = document.body.clientWidth;
    //获取窗口高度
    if (window.innerHeight)
      winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
      winHeight = document.documentElement.clientHeight;
      winWidth = document.documentElement.clientWidth;
    }
    //跟div赋值
    var detail = document.getElementById("root");
    return winWidth <= value;
  }


}


