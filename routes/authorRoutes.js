const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const auth = require("../middleware/authMiddleware");

router.get("/", authorController.getAuthors);
router.post("/", auth, authorController.createAuthor);
router.put("/:id", auth, authorController.updateAuthor);
router.delete("/:id", auth, authorController.deleteAuthor);

module.exports = router;
