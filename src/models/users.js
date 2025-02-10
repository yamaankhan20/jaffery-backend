const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Database connection

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PhoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        providerType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        IndustryType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        JobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
    }
);

module.exports = User;
