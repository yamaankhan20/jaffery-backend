'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProfessionNetwork extends Model {
    static associate(models) {
      ProfessionNetwork.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
  }

  ProfessionNetwork.init(
      {
        user_id: DataTypes.INTEGER,
          receiver_id: DataTypes.INTEGER,
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        description: DataTypes.TEXT,
      },
      {
        sequelize,
        modelName: 'ProfessionNetwork',
        tableName: 'ProfessionNetworks', // **Table Name Set Karo**
        timestamps: true,
      }
  );

  return ProfessionNetwork;
};
