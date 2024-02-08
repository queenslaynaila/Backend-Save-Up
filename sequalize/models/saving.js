'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    static associate(models) {
      Saving.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
      Saving.hasMany(models.Contribution, {
        foreignKey: 'savingId',
        onDelete: 'CASCADE'
      });
    }
  }

  Saving.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    targetAmount: DataTypes.DECIMAL,
    contributedAmount:{
      type:DataTypes.DECIMAL,
      allowNull:true ,
      defaultValue: 0.00,
    },
    priority: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['high', 'low', 'intermediate']],
          msg: 'Priority must be either "high", "low", or "intermediate"',
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull:true , //allow null when initial post request is sent
      defaultValue: 'In Progress',
      validate: {
        isIn: [['In Progress', 'Completed', 'Failed']] 
      }
    },
    targetDate: {
      type: DataTypes.DATEONLY,
      
    },
    startDate: {
      allowNull:true , //allow null when initial post request is sent
      type: DataTypes.DATEONLY,
     
    },
    endDate: {
      allowNull:true , 
      type: DataTypes.DATEONLY,
     
    }
  }, {
    sequelize,
    modelName: 'Saving',
    hooks: {
      beforeCreate: (saving) => {
        saving.startDate = new Date().toLocaleDateString('en-GB');
      },
    }
  });

  return Saving;
};
