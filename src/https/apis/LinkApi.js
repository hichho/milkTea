import request from "@/https/request";

export default {
  /**
   * 获取链接
   */
  getLink: async (type, pagination) => {
    return request("/web/link/get_link", {method: 'POST', data: {type, pagination}});
  },


  /**
   * 隐藏子栏目
   */
  delLink: async (lId) => {
    return request("/web/link/del_link", {method: 'POST', data: {lId}});
  },


  /**
   * 获取单个详情
   */
  getLinkOne: async (lId) => {
    return request("/web/link/get_link_one", {method: 'POST', data: {lId}});
  },


  /**
   * 获取redireact
   */
  getRedict: async (params) => {
    return request("/web/link/manager_get_link", {method: 'POST', data: params})
  }


}
