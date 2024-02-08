'use strict';

module.exports = {
   up:(queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Expenses', [{  
      userId:1,
      amount: 10000,
      category: 'Food',
      date:new Date(),
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  down:(queryInterface, Sequelize) =>{
    return queryInterface.bulkDelete('Expenses', null, {});
  }
};
