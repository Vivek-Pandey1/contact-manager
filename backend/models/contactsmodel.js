'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contactsModel.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contactsModel',
  });
  return contactsModel;
};