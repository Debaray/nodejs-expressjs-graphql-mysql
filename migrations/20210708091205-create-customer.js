'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.createTable('Customer',{
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('Customer');
  }
};
