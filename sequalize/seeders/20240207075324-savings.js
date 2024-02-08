'use strict';
module.exports = {
  up:(queryInterface, Sequelize)=>{
   return queryInterface.bulkInsert('Savings', [{
      description:'Buy new Laptop',
      category:'monthly',
      targetAmount: 85000,
      contributedAmount: 0,
      priority:'Low',
      userId:1,
      targetDate:new Date(2023,4,22),
        createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down:(queryInterface, Sequelize)=>{

     return queryInterface.bulkDelete('Savings', null, {});
     
  }
};
