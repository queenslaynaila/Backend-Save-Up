'use strict';
module.exports = {
  up:(queryInterface, Sequelize)=>{
   return queryInterface.bulkInsert('Savings', [{
      description:'Buy new Laptop',
      category:'monthly',
      targetAmount: 85000,
      contributedAmount: 0,
      priority:'Low',
      startDate: new Date(),
      targetDate: new Date(),
      userId:1,
      endDate: new Date(),
      excludeWeekends: 'N/A ',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down:(queryInterface, Sequelize)=>{

     return queryInterface.bulkDelete('Savings', null, {});
     
  }
};
