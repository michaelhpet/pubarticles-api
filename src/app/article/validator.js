const { celebrate, Joi } = require("celebrate");

const articleValidator = {
  createArticle: celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
      author_name: Joi.string(),
      tags: Joi.array().items(Joi.string()),
    }),
  }),
  getArticles: celebrate({
    query: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
      search: Joi.string(),
    }),
  }),
};

module.exports = articleValidator;
