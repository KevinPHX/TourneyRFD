const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/tourneyreview', ['tournaments']);
var request = require("request");


const TournamentSchema = mongoose.Schema({
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
  overall: {
    type:Number,
    required: true
  },
  name: {
    type:String,
    required: true
  },
  startdate: {
    type:String,
    required: true
  },
  enddate: {
    type:String,
    required: true
  },
  eventswithbids: {
    type: Array,
    items: {
      type: Object,
      properties: {
        value: {
          type:String
        }
      }
    }
  },
  bidrounds: {
    type: Array,
    items: {
      type: Object,
      properties: {
        value: {
          type:String
        }
      }
    }
  },
  eventswithoutbids: {
    type: Array,
    items: {
      type: Object,
      properties: {
        value: {
          type:String
        }
      }
    }
  },
  screws: {
    type:String,
    required: true
  },
  link: {
    type:String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  latitude:{
    type: Number
  },
  longitude:{
    type: Number
  },

  // reviews: {
  //   type:[String],
  //   required: true
  // }
});









const Tournament = module.exports = mongoose.model('Tournament', TournamentSchema);

module.exports.getTournamentById = function(id, callback){
  Tournament.findById(id, callback);
}

module.exports.addTournament = function(newTournament, callback){
  newTournament.save(callback);
}
