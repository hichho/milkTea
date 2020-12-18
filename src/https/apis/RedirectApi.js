import request from "@/https/request";

export default {
  /**
   * 获取文章
   */
  getRedirectDetail: async (params) => {
    return request("/web/index/get_config_one", {method: 'POST', data: params});
  },


}
