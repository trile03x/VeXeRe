'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stations',
      [{
        name: "Bến Xe Huế",
        address: "12 Vỹ Dạ",
        province: "Thừa Thiên Huế",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      },
      {
        name: "Bến Xe Hà Nội",
        address: "21 Đống Đa",
        province: "Ba Vì",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      },
      {
        name: "Bến xe Hội An",
        address: "10 Nguyễn Trung",
        province: "Hội An",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      },
      {
        name: "Bến Xe Đà Nẵng",
        address: "111 Tôn Đức Thắng",
        province: "Đà Nẵng",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      },
      {
        name: "Bến Xe Vinh",
        address: "12 Lê Văn Lương",
        province: "Vinh",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      },
      {
        name: "Bến Xe Nghệ An",
        address: "119 Nguyễn Huệ",
        province: "Nghệ An",
        updatedAt: "2024-05-13 09:39:17",
        createdAt: "2024-05-13 09:39:17"
      }
      ],
      {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stations', null, {});
  }
};
