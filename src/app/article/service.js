const { AppError } = require("../../utils");
const Article = require("./model");

class ArticleService {
  async createArticle(payload) {
    if (await Article.findOne({ title: payload.title }))
      throw new AppError(400, "Article with this title already exists");
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
      .limit(limit);
    return articles;
  }

  async getCount() {
    return await Article.countDocuments();
  }
}

const articleService = new ArticleService();
module.exports = articleService;
