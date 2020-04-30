const model = require("../models/index");
const Op = require("sequelize").Op;
exports.findAll = async (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const post = await model.post.findAll({ where: condition });
  try {
    if (post.length !== 0) {
      res.json({
        status: 200,
        massage: "ok",
        data: post,
      });
    }
  } catch (error) {
    res.json({
      massage: "error",
    });
    throw error;
  }
};

exports.create = async (req, res) => {
  try {
    const post = await model.post.create({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    });

    if (post) {
      res.status(201).json({
        massage: "data created successfully",
        data: post,
      });
    }
  } catch (error) {
    res.status(400).json({
      massage: error,
    });
  }
};
