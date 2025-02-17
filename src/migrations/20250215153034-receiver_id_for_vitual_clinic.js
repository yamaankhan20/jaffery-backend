'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('virtualclinics', 'receiver_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      after: 'user_id'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('virtualclinics', 'receiver_id');

  }
};
