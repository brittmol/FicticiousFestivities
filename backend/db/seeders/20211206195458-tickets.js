'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        userId: 1,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        eventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
