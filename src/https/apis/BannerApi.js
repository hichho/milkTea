import request from "@/https/request";

export default {

  /**
   * 获取所有栏目
   */
  getAllBanner: async (type) => {
    return request("/web/banner/get_banner", {method: 'POST', data: {type}});
  },



}
