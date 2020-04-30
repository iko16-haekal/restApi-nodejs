var express = require("express");
var router = express.Router();

const postController = require("../controllers/postController");
/* GET users listing. */

router.get("/", postController.findAll);

module.exports = router;
