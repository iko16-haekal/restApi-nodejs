const model = require("../models/index");
const Op = require("sequelize").Op;

exports.findAll = async (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const post = await model.post.findAll({ where: condition });
  try {
    if (post.length !== 0) {
      res.json({
        post,
      });
    } else {
      res.json({
        status: 404,
        massage: "data not found",
        data: "EMPTY",
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

exports.findOne = async (req, res) => {
  try {
    const post = await model.post.findByPk(req.params.id);
    if (post) {
      res.json({
        post,
      });
    } else {
      res.status(500).json({
        massage: "data not found" + req.params.id,
      });
    }
  } catch (error) {
    res.json({
      massage: error,
    });
  }
};
