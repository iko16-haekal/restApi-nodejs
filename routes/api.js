var express = require("express");
var router = express.Router();
const postController = require("../controllers/postController");
const cors = require("../middleware/cors");
/* GET users listing. */

// var cors = require("cors");

// var whitelist = ["http://localhost:8081"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

//cors

router.get("/post", cors, postController.findAll);
router.get("/post/published", postController.findPublished);
router.get("/post/:id", postController.findOne);
router.post("/post", postController.create);
router.put("/post/:id", postController.update);
router.delete("/post/:id", postController.delete);
router.delete("/post", postController.deleteAll);
module.exports = router;
