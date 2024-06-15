'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Tri',
        email: 'trifake@gmail.com',
        password: '12345',
        numberPhone: '0938328355',
        type: 'admin',
        avatar: 'https://www.m5s.vn/upload/images/meo-con-cute-lam-avt.jpg',
        updatedAt: "2024-05-13 09:41:17",
        createdAt: "2024-05-13 09:41:17"

      },
      {
        name: 'TriLe',
        email: 'trifake2@gmail.com',
        password: '12345',
        numberPhone: '0963485129',
        type: 'admin',
        avatar: 'https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/avatar-meo-cute-de-thuong-03.jpg',
        updatedAt: "2024-05-13 09:41:17",
        createdAt: "2024-05-13 09:41:17"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
