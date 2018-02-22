var config = require("../config/dev");
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
//var mongoosePaginateLinks = require('mongoose-paginate-links');
var paginate = require('express-paginate');

var teamSchema = new mongoose.Schema({  
  country: String,
  GroupName: String
});
mongoose.model('Team', teamSchema);

var locationSchema = new mongoose.Schema({ type: String, name: String, address: String});
locationSchema.plugin(mongoosePaginate);
mongoose.model('Location', locationSchema, 'location');

mongoose.connect('mongodb://' + config.database.user+ ':' + config.database.password + '@ds237808.mlab.com:37808/eatsdulwich-sandbox');  

