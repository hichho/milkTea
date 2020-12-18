import request from "@/https/request";

export default {
  /**
   * 获取文章
   */
  getSearchResult: async (search, pagination) => {
    return request("/web/article/search_article", {method: 'POST', data: {keyword: search, pagination}});
  },


}
