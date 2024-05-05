const Article = require("./model");

class ArticleService {
  async createArticle(payload) {
    return await Article.create(payload);
  }

  async getArticles(payload) {
    const { page = 1, limit = 10, search, ...query } = payload;
    const offset = (page - 1) * limit;
    const articles = await Article.find({
      ...query,
      ...(search ? { $text: { $search: search } } : {}),
    })
      .skip(offset)
      .limit(limit)
      .sort({ timestamp: "desc" });
    return articles;
  }

  async getCount(payload) {
    const { page: _, limit: __, search, ...query } = payload;
    return await Article.countDocuments({
      ...query,
      ...(search ? { $text: { $search: search } } : {}),
    });
  }
}

const articleService = new ArticleService();
module.exports = articleService;
