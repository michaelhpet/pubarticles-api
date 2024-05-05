const { success, getPagination } = require("../../utils");
const articleService = require("./service");

class ArticleController {
  /**
   * Create a new article
   * @param {import("express").Request} req Request object
   * @param {import("express").Response} res Response object
   * @param {import("express").NextFunction} next Next function
   */
  async createArticle(req, res, next) {
    try {
      const article = await articleService.createArticle({
        ...req.body,
        excerpt: req.body.body.substring(0, 200),
      });
      res.json(success({ article }, "Article created successfully"));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get all articles
   * @param {import("express").Request} req Request object
   * @param {import("express").Response} res Response object
   * @param {import("express").NextFunction} next Next function
   */
  async getArticles(req, res, next) {
    try {
      const articles = await articleService.getArticles(req.query);
      const totalCount = await articleService.getCount();
      const pagination = getPagination(req.query, articles.length, totalCount);
      res.json(
        success({ articles, pagination }, "Articles fetched successfully")
      );
    } catch (error) {
      next(error);
    }
  }
}

const articleController = new ArticleController();
module.exports = articleController;
