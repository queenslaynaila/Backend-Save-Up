'use strict';


const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    static associate(models) {
      Saving.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
    })
      Saving.hasMany(models.Contribution, {
          foreignKey: 'savingId',
          onDelete: 'CASCADE'
       })
     
    }
  }
  Saving.init({
    id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    userId:DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    targetAmount: DataTypes.DECIMAL,
    contributedAmount: DataTypes.DECIMAL,
    priority: DataTypes.STRING,
    startDate: DataTypes.DATE,
    targetDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    excludeWeekends: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Saving',
  });
  return Saving;
};





