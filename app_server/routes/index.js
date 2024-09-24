/*var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/
/*const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
/* GET homepage. 
router.get('/', ctrlMain.index);
module.exports = router; */
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlDonations= require('../controllers/donate')
const ctrlReviews= require('..//controllers/feedback')
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/reviews',ctrlReviews.fb);
/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/donation',ctrlDonations.don);
module.exports = router;