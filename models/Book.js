const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Book", BookSchema);
