const Sequelize = require('sequelize');
const { db } = require ("../db.js");
const { INTEGER, STRING } = Sequelize;

const Date = db.define("date", {
  date: {
    type: INTEGER,
    allowNull: false
  },
  weekDay: {
    type: STRING,
    allowNull: false
  },
  task: {
    type: STRING
  }
});

module.exports = { Date }