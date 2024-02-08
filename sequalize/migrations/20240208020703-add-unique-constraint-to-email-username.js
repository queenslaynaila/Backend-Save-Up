'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_email_constraint'
    });

    await queryInterface.addConstraint('Users', {
      fields: ['username'],
      type: 'unique',
      name: 'unique_username_constraint'
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users', 'unique_email_constraint');
    await queryInterface.removeConstraint('users', 'unique_username_constraint');
  }
};
