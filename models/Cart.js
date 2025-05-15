const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
