'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: 'Great Event!!!!',
        userId: 1,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: 'Comment 1',
        userId: 1,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: 'Comment 2',
        userId: 2,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: 'Comment 3',
        userId: 3,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: 'Horrible Event, hated it!!!',
        userId: 1,
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
