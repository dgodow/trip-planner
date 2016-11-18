const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/cool', {
  logging: false
});

var Place = sequelize.define('place', {
  address : {type: Sequelize.STRING, allowNull: false},
  city : {type: Sequelize.STRING, allowNull: false},
  state : {type: Sequelize.STRING, allowNull: false},
  phone : {type: Sequelize.STRING, allowNull: false},
  latitude: {type: Sequelize.FLOAT, allowNull: false},
  longitude: {type: Sequelize.FLOAT, allowNull: false},

  location: {
    type: Sequelize.ARRAY,
    allowNull: false,
    set: function () {
      this.latitude
    }
  }
})

var Hotel = sequelize.define('hotel', {

})

var Activity = sequelize.define('activity', {

})

var Restaurant = sequelize.define('restaurant', {

})

var Associations = sequelize.define('associations', {

})

module.exports = {
  db
};
