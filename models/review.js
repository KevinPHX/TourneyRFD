const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/tourneyreview', ['reviews']);
var request = require("request");

const ReviewSchema = mongoose.Schema({
  judgingpool: {
    type:Number,
    required: true
  },
  accomodations: {
    type:Number, //yes or no
    required: true
  },
  location: {
    type:Number,
    required: true
  },
  scheduling: {
    type:Number,
    required: true
  },
  date: {
    type:String,
    required: true
  },
  tournament: {
    type:String,
    required: true
  },
  tournamentname: {
    type:String,
    required: true
  },
  userid: {
    type:String,
    required: true
  },
  role: {
    type:String,
    required: true
  },
  firstname: {
    type:String,
    required: true
  },
  lastname: {
    type:String,
    required: true
  },
  affiliation: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  content: {
    type:String,
    required: true
  },
  rating: {
    type:Number,
    required: true
  },
  raters: {
    type: Array,
    items: {
      type: String,
    }
  },
});









const Review = module.exports = mongoose.model('Review', ReviewSchema);

module.exports.getReviewById = function(id, callback){
  Review.findById(id, callback);
}

module.exports.addReview = function(newReview, callback){
  newReview.save(callback);
}
