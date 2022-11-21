"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Comments";
    return queryInterface.bulkInsert(options, [
      {
        comment: "Great Event!!!!",
        userId: 2,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "Comment 1",
        userId: 3,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "Comment 2",
        userId: 4,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "Comment 3",
        userId: 1,
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "Horrible Event, hated it!!!",
        userId: 2,
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Comments";
    return queryInterface.bulkDelete(options);
  },
};
