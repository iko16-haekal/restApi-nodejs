const model = require("../models/index");
const Op = require("sequelize").Op;

exports.findAll = async (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const post = await model.post.findAll({
    where: condition,
    order: [["id", "DESC"]],
  });
  try {
    if (post.length !== 0) {
      res.json({
        post,
      });
    } else {
      res.json({
        status: 404,
        message: "data not found",
        data: "EMPTY",
      });
    }
  } catch (error) {
    res.json({
      message: "error",
    });
    throw error;
  }
};

exports.create = async (req, res) => {
  const post = await model.post.create({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });
  try {
    if (post) {
      res.status(201).json({
        message: "data created successfully",
        data: post,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.findOne = async (req, res) => {
  const post = await model.post.findByPk(req.params.id);
  try {
    if (post) {
      res.json({
        post,
      });
    } else {
      res.status(500).json({
        message: "data not found" + req.params.id,
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const post = await model.post.update(
    {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    },
    {
      where: {
        id: id,
      },
    }
  );
  try {
    if (post) {
      res.json({
        message: "data updated successfully",
        data: post,
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  const post = await model.post.destroy({
    where: { id: id },
  });
  try {
    if (post) {
      res.json({
        message: "successfully deleting data where id = " + id,
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

exports.findPublished = async (req, res) => {
  const post = await model.post.findAll({ where: { published: true } });
  try {
    if (post.length !== 0) {
      res.json({
        post,
      });
    } else {
      res.json({
        status: 404,
        message: "data not found",
        data: "EMPTY",
      });
    }
  } catch {
    res.json({
      message: "error",
    });
    throw error;
  }
};

exports.deleteAll = async (req, res) => {
  const post = await model.post.destroy({ where: {} });
  try {
    if (post > 0) {
      res.json({
        message: "deleting all data successfully",
      });
    } else {
      res.json({
        message: "there is no data to delete",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
