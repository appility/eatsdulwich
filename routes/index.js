var express = require('express');
var router = express.Router();
var locations = require('../model/Locations');

/* GET home page. */

router.get('/', function(req, res, next) {
  var page = req.query.page;
  locations.locationlist (page, function(err, locationlist) {
     res.render('index', {
       title: 'Test web page on node.js using Express and Mongoose',
       pagetitle: 'Hello there',
       locations: locationlist.docs,
       resultCount: locationlist.total,
       currentPage: locationlist.page,
       totalPages: locationlist.pages
     });
   });
});

router.get('/search', (req, res) => {
  console.log(req.body)
  var page = req.query.page;
  var search = req.query.search;
  locations.locationlist (page, function(err, locationlist) {
     res.render('index', {
       title: 'Test web page on node.js using Express and Mongoose',
       pagetitle: 'Hello there',
       locations: locationlist.docs,
       resultCount: locationlist.total,
       currentPage: locationlist.page,
       totalPages: locationlist.pages
     });
   });
})

router.post('/search', (req, res) => {
  console.log(req.body)
  res.send(req.body.name);
})

module.exports = router;



// admin Pa55w0rd\

//     database.collection("locations").find().toArray(function(err, docs){
//   docs.forEach(function(doc){
//     console.log(doc.name + " is a nice company")
//   });
// });
