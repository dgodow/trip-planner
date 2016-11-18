const db = require('../models/db')
const router = require('express').Router();

// LOADING DB INTO INDEX

router.get('/', (req, res, next) => {
  // var hotelData = db.model('hotel').findAll();
  // var restaurantData = db.model('restaurant').findAll();
  // var activitiesData = db.model('activity').findAll();
  // var data = [hotelData, restaurantData, activitiesData];

  // Promise.all(data)
  //   .spread(function (hotels, restaurants, activities) {
  //     return res.render('index', {
  //       hotels: hotels,
  //       restaurants: restaurants,
  //       activities: activities
  //     })
  //   })
  //   .catch(next);

  var outerScopeContainer = {};
  db.model('hotel').findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return db.model('restaurant').findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return db.model('activity').findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
})

// REAL ROUTES


module.exports = router;
