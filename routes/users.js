const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require("../config/database")
const User = require('../models/user');
const bcrypt = require('bcryptjs');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth', ['users']);
var request = require("request");
const mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);
var nodemailer = require("nodemailer")
var async = require("async")
var crypto = require("crypto")

mongoose.connect(config.database);



nev.configure({
    verificationURL: 'http://localhost:3000/users/email-verification/${URL}',
    persistentUserModel: User,
    tempUserCollection: 'temporary_users',

    transportOptions: {
        service: 'Gmail',
        auth: {
            user: ' brophy.carpool.sign.up@gmail.com',
            pass: 'Whatever2018'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <brophy.carpool.sign.up_do_not_reply@gmail.com>',
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
                            },

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

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
        //   console.log('error', 'No account with that email address exists.');
        return res.json({success: false});
        //res.redirect('/forgot');
        }
console.log('step 1')
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
        console.log('step 2')


      var smtpTrans = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
          user: 'carpoolpassreset@gmail.com',
          pass: 'carpool2018'
        }
      });
      var mailOptions = {

        to: user.email,
        from: 'carpoolpassreset@gmail.com',
        subject: 'Brophy Carpool Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://localhost:4200/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'

      };
      console.log('step 3')

        smtpTrans.sendMail(mailOptions, function(err) {
        res.json('An e-mail has been sent to ' + user.email + ' with further instructions.');
        console.log('sent')
        //res.redirect('/forgot');
});
}
  ], function(err) {
    console.log('this err' + ' ' + err)
    res.send(err)
    //res.redirect('/');
  });
});

router.get('/forgot', function(req, res) {
  res.render('forgot', {
    User: req.user
  });
});

router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      console.log(user);
    if (!user) {
      res.send('Password reset token is invalid or has expired.');
      //res.redirect('/forgot');
    }
    res.render('reset', {
     User: req.user
    });
  });
});




router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user, next) {
        if (!user) {
          res.send('Password reset token is invalid or has expired.');
          //res.redirect('back');
        }

        user.password = req.body.password

        bcrypt.genSalt(10, (err, salt)=>{
          bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) throw err;
            user.password = hash;




        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        console.log('password' + user.password  + 'and the user is' + user)

user.save(function(err) {
  if (err) {
      console.log('here')
      //res.redirect('back');
  } else {
      console.log('here2')
    // req.logIn(user, function(err) {
     done(err, user);
    // });

  }
        });
      })
    })



      });
    },





    function(user, done) {
        console.log('got this far 4')
      var smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'carpoolpassreset@gmail.com',
          pass: 'carpool2018'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'carpoolpassreset@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          ' - This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTrans.sendMail(mailOptions, function(err) {
        res.json('Success! Your password has been changed.');
        done(err);
      });
    }




  ], function(err) {
    console.log(err)
    //res.redirect('/');
  });
});

module.exports = router;
