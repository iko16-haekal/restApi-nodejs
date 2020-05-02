var express = require("express");
var router = express.Router();
const postController = require("../controllers/postController");
const cors = require("../middleware/cors");

router.get("/post", cors, postController.findAll);
router.get("/post/published", cors, postController.findPublished);
router.get("/post/:id", cors, postController.findOne);
router.post("/post", cors, postController.create);
router.put("/post/:id", cors, postController.update);
router.delete("/post/:id", cors, postController.delete);
router.delete("/post", cors, postController.deleteAll);
module.exports = router;
