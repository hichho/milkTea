import request from "@/https/request";

export default {
  /**
   * 获取主栏目
   */
  getActivity: async () => {
    return request("/web/activity/get_activity", {method: 'POST', data: {}});
  },
  /**
   * 删除活动
   */
  getActivityOne: async (aId) => {
    return request("/web/activity/get_activity_one", {method: 'POST', data: {aId}});
  },


}
