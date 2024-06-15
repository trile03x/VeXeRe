'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', [
      {
        user_id: '1',
        trip_id: '2',
        updatedAt: "2024-05-13 09:41:17",
        createdAt: "2024-05-13 09:41:17"
      },
      {
        user_id: '2',
        trip_id: '3',
        updatedAt: "2024-05-13 09:41:17",
        createdAt: "2024-05-13 09:41:17"
      },
      {
        user_id: '2',
        trip_id: '1',
        updatedAt: "2024-05-13 09:41:17",
        createdAt: "2024-05-13 09:41:17"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
