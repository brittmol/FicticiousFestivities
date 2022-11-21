"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Tickets";
    return queryInterface.bulkInsert(options, [
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
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Tickets";
    return queryInterface.bulkDelete(options);
  },
};
