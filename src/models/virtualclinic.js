'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VirtualClinic extends Model {
    static associate(models) {
      VirtualClinic.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  }

  VirtualClinic.init(
      {
        user_id: DataTypes.INTEGER,
          receiver_id: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        age: DataTypes.STRING,
        contact_info: DataTypes.INTEGER,
        location: DataTypes.STRING,
        Symptoms: DataTypes.TEXT,
        duration_of_symptoms: DataTypes.STRING,
        pain_rating: DataTypes.INTEGER,
        existing_medical_conditions: DataTypes.TEXT,
        active_medications_prescriptions: DataTypes.TEXT,
      },
      {
        sequelize,
        modelName: 'VirtualClinic',
        tableName: 'VirtualClinics', // **Table Name Set Karo**
        timestamps: true,
      }
  );

  return VirtualClinic;
};
