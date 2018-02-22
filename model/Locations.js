var mongoose = require('mongoose');  

exports.locationlist = function locationlist(page, callback) {  
  var Location = mongoose.model('Location');
  var query = {};
  console.log("PAGE", page);
  var options = { 
    page: page,
    limit: 3
  };

Location.paginate(query, options, function(err, locations) {
    if (err) {
      console.log(err);
    } else {
      console.log(locations);
      callback("", locations);
    }
  }); // end Team.find 
}; // end exports.teamlist



  // Location.find({}, function(err, locations) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(locations);
  //     callback("", locations);
  //   }
  // }); // end Team.find 