const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, cartController.getCart);
router.post("/add", auth, cartController.addToCart);
router.delete("/remove/:bookId", auth, cartController.removeFromCart);
router.delete("/clear", auth, cartController.clearCart);

module.exports = router;
