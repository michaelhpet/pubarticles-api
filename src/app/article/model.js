const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String },
  body: { type: String, required: true },
  author_name: { type: String, required: true, index: true },
  author_email: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
