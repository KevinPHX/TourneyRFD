const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth', ['users']);
var request = require("request");



//Address();



function Address(){
  db.users.find().toArray(function(err, users){
    if (err) {
      console.log(err);
    }
    else {
      users.forEach(function(users){
        console.log(users.address)

        Address = users.address;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: Address,
            key: "AIzaSyAm1tkJQOZCC33-0w_PkblDN_3Yykqkng4"
          }
        })
        .then(function(response){
        // console.log(response);
      //https://maps.googleapis.com/maps/api/geocode/json?address=3819+E+Quail+Ave&key=AIzaSyAm1tkJQOZCC33-0w_PkblDN_3Yykqkng4
         resultsurl = response.request.res.responseUrl;
         console.log(resultsurl)
          request({
            url: resultsurl,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {

              lat = body.results[0].geometry.location.lat;
              lat;
              lng = body.results[0].geometry.location.lng;
              lng;
              number = [];
              number[0] = lat;
              number[1] = lng;
                console.log(lat)
                console.log(lng)
                console.log(number);
            }


        })

         })
        .catch(function(error){
          console.log(error);
        })
      })
    }
  })
}

const GeoSchema = mongoose.Schema({
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
        type:[Number],
        index:'2dsphere'
    }
})






//User Schema
const UserSchema = mongoose.Schema({
  role: {
    type:String,
    required: true
  },
  school: {
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
  phonenumber: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  zipcode: {
    type:String,
    required: true
  },
  latitude:{
    type: Number
  },
  longitude:{
    type: Number
  },
  geometry:GeoSchema,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});









const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}
module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    })
  })
}

module.exports.updateUser = function(newUser, callback){
  newUser.save(callback);
}

module.exports.hashPassword = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      //newUser.save(callback);
    })
  })
}



module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
