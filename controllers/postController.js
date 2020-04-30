const model = require("../models/index");

exports.findAll = async (req, res) => {
  const post = await model.post.findAll({});
  try {
    if (post.length !== 0) {
      res.json({
        status: 200,
        massage: "ok",
        data: post,
      });
    }
  } catch (error) {
    throw error;
  }
};
