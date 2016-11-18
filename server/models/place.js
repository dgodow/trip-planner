const db = require('./db');
const Sequelize = require('sequelize');

var Place = db.define('place', {
  address : {type: Sequelize.STRING, allowNull: false},
  city : {type: Sequelize.STRING, allowNull: false},
  state : {type: Sequelize.STRING, allowNull: false},
  phone : {type: Sequelize.STRING, allowNull: false},

  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false,
    // set: function () {
    //   this.setDataValue('location', [latitude,longitude])
    // }
  }
})

module.exports = Place