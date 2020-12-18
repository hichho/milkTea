import {message} from "antd";
import {history} from 'umi';

export default {

  /**
   * 显示提示消息
   * @param msg
   * @param type
   * @param callback
   */
  showToast: (msg, type = 'success', callback) => {
    message[type](msg, 2, callback);
  },

  /**
   * 显示网络请求错误
   * @param res
   */
  showRespError: (res) => {
    if (res && res.code !== 200) {
      message.destroy();
      message['error'](res.message, 1, () => {
        if (res.code === 110) {
          router.push('/login');
        }
      });
    }
  },


  /**
   * 显示加载框
   * @param msg
   */
  showLoading: (msg = '数据处理中，请稍等') => {
    message.loading(msg, 0);
  },

  /**
   * 隐藏message组件
   */
  hideMessage: () => {
    message.destroy();
  },


  /**
   * 返回上一级
   */
  routerBack: () => {
    history.goBack();
  },

  /**
   * 跳转指定目录
   * @param path
   * @param query
   */
  routerPush: (path, query = {}) => {
    history.push({pathname: path, query});
  },


  /**
   * 分页配置
   * @returns {{size: string, pageSize: number, showTotal: (function(*, *): string)}}
   */
  pagination: () => {
    return {
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['20', '30', '50'],
      current: 1,
      showTotal: (total, current) => {
        return "共 " + total + ' 条数据';
      }
    }
  },

}
