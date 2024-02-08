'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.createTable('Contributions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      date: {
        type: Sequelize.DATEONLY
      },
      savingId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Savings',
          key: 'id',
          as: 'savingId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  down:(queryInterface, Sequelize)=>{
    return queryInterface.dropTable('Contributions');
  }
};