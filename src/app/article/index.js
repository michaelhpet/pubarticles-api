const express = require("express");
const authenticate = require("../../lib/middleware/auth");
const articleValidator = require("./validator");
const articleController = require("./controller");
const articleRouter = express.Router();

articleRouter.post(
  "/",
  authenticate,
  articleValidator.createArticle,
  articleController.createArticle
);

articleRouter.get(
  "/",
  articleValidator.getArticles,
  articleController.getArticles
);

module.exports = articleRouter;
