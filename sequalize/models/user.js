'use strict';

const {Model} = require('sequelize');

  module.exports = (sequelize, DataTypes) => {
    class User extends Model {
      static associate(models) {
        User.hasMany(models.Saving, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
         })
        User.hasMany(models.Expense, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        })
      }
    }
    User.init({
      id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
       },
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  };

