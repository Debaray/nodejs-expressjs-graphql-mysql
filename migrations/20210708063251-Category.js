'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('Category', { id: Sequelize.INTEGER });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('Category');
     
  }
};
