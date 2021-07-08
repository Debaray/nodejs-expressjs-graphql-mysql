'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Test', {
      slug: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      content: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      }
    }).then(() => {
      return queryInterface.createTable('Test1', {
        stug: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      })
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Test');

  }
};
