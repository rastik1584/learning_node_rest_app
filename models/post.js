'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    paranoid: true
  });
  Post.associate = function(models) {
    // associations can be defined here
  };

  
  return Post;
};