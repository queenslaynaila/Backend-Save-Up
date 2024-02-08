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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: 'Email already exists.'
          },
          validate:{
            isEmail: true,       
          }
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: 'Username already exists.'
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isValidPassword(value) {
              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if (!passwordRegex.test(value)) {
                throw new Error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol');
              }
            }
          }
        }
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  };

