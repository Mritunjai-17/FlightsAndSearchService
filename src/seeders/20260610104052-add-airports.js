'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        cityId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indra Gandhi International Airport',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chaudhary Charan Singh International Airport',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai  International Airport',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lal Bahadur Shastri Airport',
        cityId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maharishi Valmiki International Airport',
        cityId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
