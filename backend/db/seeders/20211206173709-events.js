'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        title: 'The Red Wedding',
        location: 'The Twins',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b87bf347-dca6-448f-8500-50334a6b92e8/daolmra-eabfa1d9-a973-460d-b23f-5e4ff1c78c12.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4N2JmMzQ3LWRjYTYtNDQ4Zi04NTAwLTUwMzM0YTZiOTJlOFwvZGFvbG1yYS1lYWJmYTFkOS1hOTczLTQ2MGQtYjIzZi01ZTRmZjFjNzhjMTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XNbotBmuZ7oK5FYQRvPs73walGBjhZnZyETeJTX0MNQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Triwizard Tournament',
        location: 'Hogwarts',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://i.pinimg.com/originals/53/0b/92/530b92474809afc48ceb51e3f1e641d0.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Icemaking with Elsa',
        location: 'Kingdom Arendelle',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://m.media-amazon.com/images/I/718QdGyyZkL._AC_SL1055_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Death Star Grand Opening',
        location: 'Yavin 4 Orbit',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://m.media-amazon.com/images/I/61HqYY5aM6L._AC_SL1500_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SpiderMan\'s Homecoming',
        location: 'New York City, NY',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ariel\'s Thingamabobs Exhibit',
        location: 'Kingdom Atlantica',
        datetime: new Date('December 17, 1995 03:24:00'),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://www2.pictures.zimbio.com/mp/WpdM94VnJTUx.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
