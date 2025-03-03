"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("businessnetworks", "category", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("businessnetworks", "price_offer", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("businessnetworks", "contact_email", {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    });

    await queryInterface.addColumn("businessnetworks", "contact_phone", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("businessnetworks", "location", {
      type: Sequelize.STRING,
      allowNull: false,
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("businessnetworks", "category");
    await queryInterface.removeColumn("businessnetworks", "price_offer");
    await queryInterface.removeColumn("businessnetworks", "contact_email");
    await queryInterface.removeColumn("businessnetworks", "contact_phone");
    await queryInterface.removeColumn("businessnetworks", "location");
  },
};
