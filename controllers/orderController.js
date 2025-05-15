const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.book"
    );
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      user: req.user._id,
      items: cart.items,
      total: cart.items.reduce(
        (sum, item) => sum + item.book.price * item.quantity,
        0
      ),
      status: "Processing",
    });

    await order.save();
    await Cart.findOneAndDelete({ user: req.user._id });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.book"
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
