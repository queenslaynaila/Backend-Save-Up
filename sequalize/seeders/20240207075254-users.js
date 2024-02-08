'use strict';
module.exports = {
   up:(queryInterface, Sequelize)=>{
     return  queryInterface.bulkInsert('Users', [{
        email:'queenslayjema@gmail.com',
        username:'queenslayjema',
        password:'jemanaila',
        createdAt: new Date(),
       updatedAt: new Date()
      }], {});
    
  },

  down:(queryInterface, Sequelize)=> {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
