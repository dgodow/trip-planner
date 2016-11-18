const db = require('./db');
const Sequelize = require('sequelize');

var Hotel = db.define('hotel', {
  name : {type: Sequelize.STRING, allowNull: false},
  num_stars : {type: Sequelize.FLOAT, allowNull: false},
  amenities : {type: Sequelize.TEXT, allowNull: false}
})

module.exports = Hotel