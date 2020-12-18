import request from "@/https/request";

export default {

  /**
   * 获取主栏目
   */
  getColumn: async (isTop) => {
    return request("/web/column/get_parent_column", {method: 'POST', data: {isTop}});
  },

  /**
   * 获取所有栏目
   */
  getAllColumn: async (status) => {
    return request("/web/column/get_all_column", {method: 'POST', data: {status}});
  },

  /**
   * 获取首页模块内容
   */
  getItemContent: async (params) => {
  return request("/web/index/get_index_home", {method: 'POST', data: params});
},

  /**
   * 获取首页内容img资源
   */
  getConfig: async () => {
    return request("/web/index/get_web_config", {method: 'POST', data: {}});
  },



}
