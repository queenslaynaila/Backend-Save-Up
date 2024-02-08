'use strict';

const { Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    static associate(models) {
      Contribution.belongsTo(models.Saving, {
        foreignKey: 'savingId', 
        onDelete: 'CASCADE', 
      });
    }
  }
  Contribution.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    savingId:DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Contribution',
  });
  return Contribution;
};