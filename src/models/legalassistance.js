'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LegalAssistance extends Model {
    static associate(models) {
      LegalAssistance.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  }

  LegalAssistance.init(
      {
        user_id: DataTypes.INTEGER,
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        PhoneNumber: DataTypes.INTEGER,
        address: DataTypes.STRING,
        legal_issue: DataTypes.STRING,
        description: DataTypes.TEXT,
        relevent_data: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'LegalAssistance',
        tableName: 'legal_assistance', // **Yahan Table Ka Naam Set Karo**
        timestamps: true,
      }
  );

  return LegalAssistance;
};
