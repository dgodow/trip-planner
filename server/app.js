'use strict';
const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db').db;
const router = require('./routes');

const app = express();

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', router.index);
app.get('/error', router.error);


/////////////////////////////////////////


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
})

db.sync()
.then(function () {
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
})
.catch(console.error);
