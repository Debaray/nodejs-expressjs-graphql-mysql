'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // 'Orders' = Entity, 'customerId' = column name which is added
      await queryInterface.addColumn('Orders','customerId',{
        type: Sequelize.UUID,
        references: {
          model: 'Customer',// name of the Target model
          key: 'id', // key in Target model that we're referencing 
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      });
      await queryInterface.addColumn('Orders',
      'paymentId',{
        type: Sequelize.UUID,
        references:{
          model: 'Payment', //name of Target model
          key:'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      await queryInterface.addColumn('Product',
      'orderId',{
        type: Sequelize.UUID,
        references:{
          model: 'Orders', //name of Target model
          key:'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });

    }
    catch (error) {
      console.log(error);
    }

  },

  down: async (queryInterface, Sequelize) => {
   try{
     await queryInterface.removeColumn('Orders','customerId');
     await queryInterface.removeColumn('Orders','paymentId');
     await queryInterface.removeColumn('Product','orderId');
   }catch(error){
     console.log(error);
   }
     
     
  }
};
