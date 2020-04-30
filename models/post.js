"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      published: DataTypes.BOOLEAN,
    },
    {}
  );
  post.associate = function (models) {
    // associations can be defined here
  };
  return post;
};
