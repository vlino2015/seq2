'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    sid: DataTypes.STRING,
    sess: DataTypes.STRING,
    expire: DataTypes.TIME
  }, {});
  session.associate = function(models) {
    // associations can be defined here
  };
  return session;
};