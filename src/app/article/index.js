const express = require("express");
const articleValidator = require("./validator");
const articleController = require("./controller");
const articleRouter = express.Router();

articleRouter.post(
  "/",
  articleValidator.createArticle,
  articleController.createArticle
);

articleRouter.get(
  "/",
  articleValidator.getArticles,
  articleController.getArticles
);

module.exports = articleRouter;
