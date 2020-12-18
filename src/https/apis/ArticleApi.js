import request from "@/https/request";

export default {
  /**
   * 获取文章
   */
  getArticle: async (columnId, parentId, status, pagination) => {
    return request("/web/article/get_all_article", {method: 'POST', data: {columnId, parentId, status, pagination}});
  },

  getAboutUs: async () => {
    return request("/web/index/get_about_us", {method: 'POST', data: {}});
  },

  /**
   * 获取详情
   * @returns {Promise<any>}
   */
  getArticleDetail: async (aId) => {
    return request("/web/article/get_article_detail", {method: 'POST', data: {aId}});
  },

  /**
   * 搜索相关文章
   * @returns {Promise<any>}
   */
  searchArticle: async (keyword) => {
    let pagination = {pageSize: 3, current: 1};
    return request("/web/article/search_article", {method: 'POST', data: {keyword, pagination}});
  },

  /**
   * 获取相关文章(3)
   * @returns {Promise<any>}
   */
  getOtherArticle: async (params) => {
    return request("/web/article/last3Article", {method: 'POST', data: params});
  },


}
