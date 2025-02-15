'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VirtualClinics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      contact_info: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      Symptoms: {
        type: Sequelize.TEXT
      },
      duration_of_symptoms: {
        type: Sequelize.STRING
      },
      pain_rating: {
        type: Sequelize.INTEGER
      },
      existing_medical_conditions: {
        type: Sequelize.TEXT
      },
      active_medications_prescriptions: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VirtualClinics');
  }
};