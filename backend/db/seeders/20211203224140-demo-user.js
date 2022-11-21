"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(options, [
      {
        email: "demo@user.io",
        username: "Demo-lition",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "awesomesauce@gmail.com",
        username: "awesomesauce",
        hashedPassword: bcrypt.hashSync("awesomesauce"),
      },
      {
        email: "maleficent@sleepingbeauty.com",
        username: "maleficent666",
        hashedPassword: bcrypt.hashSync("sleepingbeauty666"),
      },
      {
        email: "brunomars@gmail.com",
        username: "brunoMarrrs",
        hashedPassword: bcrypt.hashSync("bruno"),
      },
      {
        email: "phantom@opera.com",
        username: "phantomOpera",
        hashedPassword: bcrypt.hashSync("phantom"),
      },
      {
        email: faker.internet.email(),
        username: "FakeUser1",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: "FakeUser2",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = "Users";
    return queryInterface.bulkDelete(options);
  },
};
