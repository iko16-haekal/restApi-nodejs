var express = require("express");
var router = express.Router();

const postController = require("../controllers/postController");
/* GET users listing. */

router.get("/", postController.findAll);
router.post("/post", postController.create);

module.exports = router;
