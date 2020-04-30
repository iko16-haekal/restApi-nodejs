var express = require("express");
var router = express.Router();

const postController = require("../controllers/postController");
/* GET users listing. */

router.get("/post", postController.findAll);
router.get("/post/published", postController.findublished);
router.get("/post/:id", postController.findOne);
router.post("/post", postController.create);
router.put("/post/:id", postController.update);
router.delete("/post/:id", postController.delete);
module.exports = router;
