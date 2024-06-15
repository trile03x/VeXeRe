'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stations',
      [
        {
          name: "Bến Xe Hà Nội",
          address: "12 Trần Phú",
          province: "Hà Nội",
          updatedAt: "2024-05-13 09:40:17",
          createdAt: "2024-05-13 09:40:17"
        },
        {
          name: "Bến Xe Sài Gòn",
          address: "45 Lý Thường Kiệt",
          province: "TP.HCM",
          updatedAt: "2024-05-13 09:41:17",
          createdAt: "2024-05-13 09:41:17"
        },
        {
          name: "Bến Xe Đà Nẵng",
          address: "89 Nguyễn Văn Linh",
          province: "Đà Nẵng",
          updatedAt: "2024-05-13 09:42:17",
          createdAt: "2024-05-13 09:42:17"
        },
        {
          name: "Bến Xe Cần Thơ",
          address: "23 Hùng Vương",
          province: "Cần Thơ",
          updatedAt: "2024-05-13 09:43:17",
          createdAt: "2024-05-13 09:43:17"
        },
        {
          name: "Bến Xe Hải Phòng",
          address: "67 Điện Biên Phủ",
          province: "Hải Phòng",
          updatedAt: "2024-05-13 09:44:17",
          createdAt: "2024-05-13 09:44:17"
        },
        {
          name: "Bến Xe Nha Trang",
          address: "101 Trần Hưng Đạo",
          province: "Khánh Hòa",
          updatedAt: "2024-05-13 09:45:17",
          createdAt: "2024-05-13 09:45:17"
        },
        {
          name: "Bến Xe Huế",
          address: "76 Lê Lợi",
          province: "Thừa Thiên Huế",
          updatedAt: "2024-05-13 09:46:17",
          createdAt: "2024-05-13 09:46:17"
        },
        {
          name: "Bến Xe Vũng Tàu",
          address: "55 Ba Cu",
          province: "Bà Rịa - Vũng Tàu",
          updatedAt: "2024-05-13 09:47:17",
          createdAt: "2024-05-13 09:47:17"
        },
        {
          name: "Bến Xe Buôn Ma Thuột",
          address: "34 Phan Chu Trinh",
          province: "Đắk Lắk",
          updatedAt: "2024-05-13 09:48:17",
          createdAt: "2024-05-13 09:48:17"
        },
        {
          name: "Bến Xe Quảng Ninh",
          address: "28 Trần Nhân Tông",
          province: "Quảng Ninh",
          updatedAt: "2024-05-13 09:49:17",
          createdAt: "2024-05-13 09:49:17"
        },
        {
          name: "Bến Xe Bình Dương",
          address: "11 Huỳnh Văn Lũy",
          province: "Bình Dương",
          updatedAt: "2024-05-13 09:50:17",
          createdAt: "2024-05-13 09:50:17"
        },
        {
          name: "Bến Xe Lâm Đồng",
          address: "90 Bùi Thị Xuân",
          province: "Lâm Đồng",
          updatedAt: "2024-05-13 09:51:17",
          createdAt: "2024-05-13 09:51:17"
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
