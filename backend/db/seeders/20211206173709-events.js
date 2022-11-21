"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Events";
    return queryInterface.bulkInsert(options, [
      {
        title: "The Red Wedding",
        location: "The Twins",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Come enjoy a Game of Thrones experience like never before! There will be overflowing wine and food, bloodshed and gore. There is a special wolf-head display by Rob Stark and the Lannisters will send their regards. Celebrate with Edward Tully and his new wife as we witness the end to the King of the North!",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b87bf347-dca6-448f-8500-50334a6b92e8/daolmra-eabfa1d9-a973-460d-b23f-5e4ff1c78c12.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4N2JmMzQ3LWRjYTYtNDQ4Zi04NTAwLTUwMzM0YTZiOTJlOFwvZGFvbG1yYS1lYWJmYTFkOS1hOTczLTQ2MGQtYjIzZi01ZTRmZjFjNzhjMTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XNbotBmuZ7oK5FYQRvPs73walGBjhZnZyETeJTX0MNQ",
        hostId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Choose Your Adventure",
        location: "Professor Oak's Lab",
        datetime: new Date("June 10, 1994 12:30:00"),
        summary:
          "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name? Right! This is my grandson. He's been your rival since you were a baby. …Erm, what is his name again? That's right! I remember now! Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go! There are 3 Pokémon here! Haha! They are inside the Poké Balls. When I was young, I was a serious Pokémon trainer! In my old age, I have only 3 left, but you can have one! Choose!",
        image:
          "https://www.tynker.com/projects/screenshot/5d88cd1ab7ccdd1be53a96d2/choose-your-pokemon-2-0-1.png",
        hostId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Triwizard Tournament",
        location: "Hogwarts",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image:
          "https://i.pinimg.com/originals/53/0b/92/530b92474809afc48ceb51e3f1e641d0.jpg",
        hostId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Icemaking with Elsa",
        location: "Kingdom Arendelle",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image:
          "https://m.media-amazon.com/images/I/718QdGyyZkL._AC_SL1055_.jpg",
        hostId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Death Star Grand Opening",
        location: "Yavin 4 Orbit",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image:
          "https://m.media-amazon.com/images/I/61HqYY5aM6L._AC_SL1500_.jpg",
        hostId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "SpiderMan's Homecoming",
        location: "New York City, NY",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
        hostId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ariel's Thingamabobs Exhibit",
        location: "Kingdom Atlantica",
        datetime: new Date("December 17, 1995 03:24:00"),
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: "https://www2.pictures.zimbio.com/mp/WpdM94VnJTUx.jpg",
        hostId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "FIDE World Chess Championship 2021",
        location: "Dubai, United Arab Emirates",
        datetime: new Date("November 24, 2021 10:00:00"),
        summary:
          "The World Chess Championship 2021 is a chess match between the reigning world champion Magnus Carlsen and the challenger Ian Nepomniachtchi to determine the World Chess Champion. It was held under the auspices of FIDE and played during Expo 2020 at Dubai Exhibition Centre in Dubai, United Arab Emirates, between 24 November and 10 December 2021.",
        image:
          "https://app.fide.com/upload/13124/a9be344ea459f20ca5ca8a2d37b1e000.jpg",
        hostId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Events";
    return queryInterface.bulkDelete(options);
  },
};
