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
        allowNull:true, ///allow null when initial post is sent
        defaultValue: 0
      },
      priority: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: 'In Progress' 
      },
      targetDate: {
        type: DataTypes.DATEONLY,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        allowNull:true , 
        type: DataTypes.DATEONLY,
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
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Savings');
  }
};