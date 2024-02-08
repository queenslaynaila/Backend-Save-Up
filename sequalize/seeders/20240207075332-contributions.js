'use strict';
module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('Contributions', [{
      savingId:1,
      amount:50000,
      date:new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

   down:(queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contributions', null, {});     
}
}
