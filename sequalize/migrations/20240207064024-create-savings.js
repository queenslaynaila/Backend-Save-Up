'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Savings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
     
      category: {
        type: Sequelize.STRING
      },
      targetAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      contributedAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      priority: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      targetDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      excludeWeekends: {
        type: Sequelize.STRING,
        defaultValue: 'N/A'
      },  
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Savings');
  }
};