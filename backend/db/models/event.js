'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    datetime: DataTypes.DATE,
    summary: DataTypes.TEXT,
    image: DataTypes.TEXT,
    hostId: DataTypes.INTEGER,
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, {foreignKey: 'hostId'})
    const columnMapping = {
      through: "Ticket",
      otherKey: "userId",
      foreignKey: "eventId",
    };
    Event.belongsToMany(models.User, columnMapping);
  };
  return Event;
};
