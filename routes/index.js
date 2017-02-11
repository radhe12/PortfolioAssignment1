let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let portfolio = require('../config/portfolio');

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home'
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  
  portfolio.find((err, portfolio) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/about', {
        title: 'About',
        portfolio: portfolio
      });
    }

  });



});

/* GET products page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});

module.exports = router;
