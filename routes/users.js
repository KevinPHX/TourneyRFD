const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require("../config/database")
const User = require('../models/user');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth', ['users']);
var request = require("request");
const mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);

mongoose.connect(config.database);



nev.configure({
    verificationURL: 'http://localhost:3000/users/email-verification/${URL}',
    persistentUserModel: User,
    tempUserCollection: 'temporary_users',

    transportOptions: {
        service: 'Gmail',
        auth: {
            user: 'whoever20180101@gmail.com',
            pass: 'aztucphx'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <whoever20180101_do_not_reply@gmail.com>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
});

nev.generateTempUserModel(User);








//Register
router.post('/register', (req, res, next) => {
  Address();
  function Address(){

      Address = req.body.address;
      console.log(Address);
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
                    lng = body.results[0].geometry.location.lng;
                    number = [];
                    number[0] = lng;
                    number[1] = lat;
                      console.log(lat)
                      console.log(lng)
                      console.log(number);



                          let newUser = new User({
                            //properties:{
                            role:req.body.role,
                            school:req.body.school,
                            firstname:req.body.firstname,
                            lastname:req.body.lastname,
                            email:req.body.email,
                            phonenumber: req.body.phonenumber,
                            username: req.body.username,
                            password: req.body.password,
                            address: req.body.address,
                            zipcode: req.body.zipcode,
                            latitude:lat,
                            longitude:lng,
                          //},
                          geometry:{
                              type:"Point",
                              coordinates:number,
                            }
                          });

                          nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
                              // some sort of error
                              if (err)
                                  console.log(err)

                              // user already exists in persistent collection...
                              if (existingPersistentUser)
                                  console.log("You have already registered")

                              // a new user
                              if (newTempUser) {
                                  var URL = newTempUser[nev.options.URLFieldName];
                                  nev.sendVerificationEmail(req.body.email, URL, function(err, info) {
                                      if (err)
                                          console.log(err)

                                      console.log("Email Sent")

                                  });

                              // user already exists in temporary collection...
                              } else {
                                  console.log("User already exists")
                              }
                          });


                          User.hashPassword(newUser, (err, user) => {
                            if(err){
                              res.json({success:false, msg:"Failed to register user"});
                            } else {
                              res.json({success: true, msg:"User registered"});
                            }
                          });


                      }
                  })
                  })
                  .catch(function(error){
                    console.log(error);
                  })
                }
              })
////////////////////////////////////////////////////////////////////////////////
              //update
              router.post('/update', (req, res, next) => {
                  Address();
                      function Address(){
                          Address = req.body.address;
                          console.log(Address);
                          axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                            params: {
                                address: Address,
                                key: "AIzaSyAm1tkJQOZCC33-0w_PkblDN_3Yykqkng4"
                            }
                          })
                  .then(function(response){
                        resultsurl = response.request.res.responseUrl;
                        console.log(resultsurl)
                        request({
                        url: resultsurl,
                        json: true
                      }, function (error, response, body) {
                          if (!error && response.statusCode === 200) {
                                lat = body.results[0].geometry.location.lat;
                                lng = body.results[0].geometry.location.lng;
                                number = [];
                                number[0] = lng;
                                number[1] = lat;
                                  console.log(lat)
                                  console.log(lng)
                                  console.log(number);

                                  let newUser = new User({
                                    role:req.body.role,
                                    school:req.body.school,
                                    firstname:req.body.firstname,
                                    lastname:req.body.lastname,
                                    email:req.body.email,
                                    phonenumber: req.body.phonenumber,
                                    username: req.body.username,
                                    password: req.body.password,
                                    address: req.body.address,
                                    zipcode: req.body.zipcode,
                                    latitude:lat,
                                    longitude:lng,
                                      geometry:{
                                        type:"Point",
                                        coordinates:number,
                                      }//add way to identify whether email is brophy/xavier. Use this:http://www.java2s.com/Tutorials/Javascript/Node.js_Tutorial/0050__Node.js_String_Functions.htm
                                    });

                                    User.updateUser(newUser, (err, user) => {
                                        if(err){
                                            res.json({success:false, msg:"Failed to register user"});
                                          } else {
                                            res.json({success: true, msg:"User registered"});
                                          }
                                    })

                                  }
                                })
                              })
                              .catch(function(error){
                                console.log(error);
                              })
                            }
                          })


////////////////////////////////////////////////////////////////////////////////
router.get('/nearby/:username', function ( req, res, next){

  User.getUserByUsername(req.params.username, function(err, user) {
                if (err){
                    res.send(err);
                  }

                    db.collection('users').aggregate([

                    {
                       "$geoNear": {
                           "near": {
                                "type": "Point",
                                "coordinates": [user.longitude,user.latitude]
                            },
                            "maxDistance": 3000,
                            "distanceField": "distance",
                            "spherical": true,
                        }
                    },
                    { $match : { role : {$ne: user.role} } }
                    ],
                    function(err, users) {
                    if (err) res.send(err);
                    res.json(users);
                    });

            });


  })

//Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err,user)=>{
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'User not Found'})
    }

    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user,config.secret, {
          expiresIn: 604800 //1 week
        });
        res.json({
          success:true,
          token:'JWT '+token,
          user:{
            id:user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username:user.username,
            email: user.email,
          }
        })
      } else {
        return res.json({success: false, msg:"Wrong password"})
      }
    });//How are tokens made
  })
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});




router.get('/contacts', function(req, res, next){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});


router.delete('/delete/:id', function(req, res, next){
    db.users.remove({_id: db.ObjectId(req.params.id)}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});



router.get('/email-verification/:URL', function(req, res){
  var url = req.params.URL;
nev.confirmTempUser(url, function(err, user) {
    if (err)
        console.log(err)

    // user was found!
    if (user) {

        // optional
        nev.sendConfirmationEmail(user['email'], function(err, info) {
            console.log("Successfully Verified")
        });
    }

    // user's data probably expired...
    else
        console.log("User data expired")
});
})

module.exports = router;
