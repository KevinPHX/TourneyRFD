const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/tourneyreview', ['reports']);
var request = require("request");

var ReportSchema = new mongoose.Schema({
  reviewid: String,
  reporterid: String,
  reporteremail:String,
  reporterfirstname: String,
  reporterlastname: String,
  reporteraffiliation: String,
  judgingpool: Number,
  accomodations: Number,
  location: Number,
  scheduling: Number,
  overall: Number,
  content: String,
  reviewerid: String,
  revieweremail: String,
  reviewerfirstname: String,
  reviewerlastname: String,
  revieweraffiliation: String,
  reviewdate: String,
  reportcontent: String,
  tournament: String,
  touranmentname: String,
})

const Report = module.exports = mongoose.model('Report', ReportSchema);

module.exports.getReportById = function(id, callback){
  Report.findById(id, callback);
}

module.exports.addReport = function(newReport, callback){
  newReport.save(callback);
}
