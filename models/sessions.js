'use strict';
module.exports = (sequelize, DataTypes) => {
  const sessions = sequelize.define('sessions', {
    sid: DataTypes.STRING,
    sess: DataTypes.STRING,
    expire: DataTypes.TIME
  }, {});
  sessions.associate = function(models) {
    // associations can be defined here
  };
  return sessions;
};