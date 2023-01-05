"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "dfcbf826-6173-41be-8074-f4097cce9615",
          name: "John Doe",
          email: "john@email.com",
          role: "admin",
          createdAt: "2023-01-05",
          updatedAt: "2023-01-05",
        },
        {
          uuid: "dfcbg476-2353-48be-8074-f4097cce9363",
          name: "Jane Doe",
          email: "jane@email.com",
          role: "admin",
          createdAt: "2023-01-05",
          updatedAt: "2023-01-05",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users", null, {});
  },
};
