const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/tourneyreview', ['replies']);
var request = require("request");

const ReplySchema = mongoose.Schema({
  date: {
    type:String,
    required: true
  },
  review: {
    type:String,
    required: true
  },
  userid: {
    type:String,
    required: true
  },
  firstname: {
    type:String,
    required: true
  },
  lastname: {
    type:String, //yes or no
    required: true
  },
  affiliation: {
    type:String,
    required: true
  },
  role: {
    type:String,
    required: true
  },
  content: {
    type:String,
    required: true
  },
});

const Reply = module.exports = mongoose.model('Reply', ReplySchema);

module.exports.getReplyById = function(id, callback){
  Reply.findById(id, callback);
}

module.exports.addReply = function(newReply, callback){
  newReply.save(callback);
}
