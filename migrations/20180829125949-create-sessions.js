'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sessions', {
      sid: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      sess: {
        type: Sequelize.STRING
      },
      expire: {
        type: Sequelize.TIME
      }
    },
  {
    timestamps: false,
    freezeTableName: true
  }
  )
  .then(() => {
    return queryInterface.sequelize.query('ALTER TABLE "sessions" ALTER COLUMN "sid" TYPE VARCHAR');
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sessions');
  }
};