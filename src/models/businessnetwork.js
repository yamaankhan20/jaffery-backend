'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusinessNetwork.init({
    user_id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    status: DataTypes.STRING,
    category: DataTypes.STRING,
    price_offer: DataTypes.STRING,
    contact_email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    contact_phone: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BusinessNetwork',
    tableName: 'businessnetworks'
  });
  return BusinessNetwork;
};