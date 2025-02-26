'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LegalAssistance extends Model {
    static associate(models) {
      // LegalAssistance.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  }

  LegalAssistance.init(
      {
        user_id: DataTypes.INTEGER,
        receiver_id: DataTypes.INTEGER,
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        PhoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        legal_issue: DataTypes.STRING,
        specific_issue:DataTypes.STRING,
        description: DataTypes.TEXT,
        relevent_data: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'LegalAssistance',
        tableName: 'LegalAssistances',
        timestamps: true,
      }
  );

  return LegalAssistance;
};
