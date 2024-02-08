'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      Expense.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
      })
    }
  }
  Expense.init({
    id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    userId:DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    date: DataTypes.DATE
    
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};


























// const {
//   Model
// } = require('sequelize');
