const { celebrate, Joi } = require("celebrate");

const articleValidator = {
  createArticle: celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
      author_name: Joi.string().required(),
      author_email: Joi.string().required(),
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
