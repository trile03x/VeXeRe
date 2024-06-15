'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trips',
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2024-06-14 16:50:30",
          price: 200000,
          createdAt: "2024-06-14 18:39:05",
          updatedAt: "2024-06-14 18:39:05"
        },
        {
          fromStation: 3,
          toStation: 7,
          startTime: "2024-07-02 10:00:00",
          price: 150000,
          createdAt: "2024-06-20 09:15:00",
          updatedAt: "2024-06-20 09:15:00"
        },
        {
          fromStation: 1,
          toStation: 4,
          startTime: "2024-07-05 12:45:00",
          price: 180000,
          createdAt: "2024-06-21 11:20:00",
          updatedAt: "2024-06-21 11:20:00"
        },
        {
          fromStation: 8,
          toStation: 2,
          startTime: "2024-07-08 14:30:00",
          price: 220000,
          createdAt: "2024-06-22 14:00:00",
          updatedAt: "2024-06-22 14:00:00"
        },
        {
          fromStation: 6,
          toStation: 11,
          startTime: "2024-07-12 16:15:00",
          price: 240000,
          createdAt: "2024-06-23 13:35:00",
          updatedAt: "2024-06-23 13:35:00"
        },
        {
          fromStation: 10,
          toStation: 5,
          startTime: "2024-07-15 18:00:00",
          price: 200000,
          createdAt: "2024-06-24 15:50:00",
          updatedAt: "2024-06-24 15:50:00"
        },
        {
          fromStation: 4,
          toStation: 12,
          startTime: "2024-07-18 20:45:00",
          price: 230000,
          createdAt: "2024-06-25 17:25:00",
          updatedAt: "2024-06-25 17:25:00"
        },
        {
          fromStation: 9,
          toStation: 3,
          startTime: "2024-07-20 22:30:00",
          price: 210000,
          createdAt: "2024-06-26 19:40:00",
          updatedAt: "2024-06-26 19:40:00"
        },
        {
          fromStation: 12,
          toStation: 6,
          startTime: "2024-07-22 05:00:00",
          price: 250000,
          createdAt: "2024-06-27 20:10:00",
          updatedAt: "2024-06-27 20:10:00"
        },
        {
          fromStation: 2,
          toStation: 8,
          startTime: "2024-07-25 07:15:00",
          price: 170000,
          createdAt: "2024-06-28 21:30:00",
          updatedAt: "2024-06-28 21:30:00"
        },
        {
          fromStation: 7,
          toStation: 10,
          startTime: "2024-07-28 09:00:00",
          price: 260000,
          createdAt: "2024-06-29 23:45:00",
          updatedAt: "2024-06-29 23:45:00"
        }
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trips', null, {});
  }
};
