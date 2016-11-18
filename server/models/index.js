var db = require('./db');
var Hotel = require('./hotel');
var Place = require('./place');
var Activity = require('./activity');
var Restaurant = require('./restaurant');


Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db
