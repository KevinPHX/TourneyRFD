const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require("../config/database")
const User = require('../models/user');
const Tournament = require('../models/tournament');
const Review = require('../models/review');
const Reply = require('../models/reply');
const Image = require('../models/image');
const Report = require('../models/report');
const bcrypt = require('bcryptjs');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/tourneyreview');
var url = 'mongodb://localhost:27017/tourneyreview'
var request = require("request");
const mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);
var nodemailer = require("nodemailer")
var async = require("async")
var crypto = require("crypto")
var ObjectID = require('mongodb').ObjectID;
var multer = require('multer');
var fs = require("fs");
const MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


mongoose.connect(config.database)


router.post('/photo/:tournamentid',function(req,res){
  for(var i = 0; i < req.files.length; i++){
    let newImage = new Image({
     img: {
       data: fs.readFileSync(req.files[i].path),
       contentType: 'image/png'
     },
     tournament: req.params.tournamentid
   });
   newImage.save();
   fs.unlinkSync(req.files[i].path)
  }
});

router.get('/photo/:tournamentid', function(req, res, next) {
    db.collection('images').find({tournament: req.params.tournamentid}).toArray(function(err, images){
      if (err) res.send(err);
      res.json(images)
    })
})

nev.configure({
    verificationURL: 'http://localhost:4200/email-verification/${URL}',
    persistentUserModel: User,
    tempUserCollection: 'temporary_users',

    transportOptions: {
        service: 'Gmail',
        auth: {
            user: 'email',
            pass: 'password'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <email alias>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
});

nev.generateTempUserModel(User);








//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
      role:req.body.role,
      affiliation:req.body.affiliation,
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      email:req.body.email,
      username: req.body.username,
      password: req.body.password,
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

})
////////////////////////////////////////////////////////////////////////////////
//update
router.post('/update/:id', (req, res, next) => {
  db.collection("users").update(
    {_id: ObjectID(req.params.id)},
    {$set: {role:req.body.role,
    affiliation:req.body.affiliation,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    username: req.body.username}})
  db.collection("reviews").update(
    {userid: req.params.id},
    {$set: {role:req.body.role,
    affiliation:req.body.affiliation,
    firstname:req.body.firstname,
    lastname:req.body.lastname}}, {multi:true})
  db.collection("replies").update(
    {userid: req.params.id},
    {$set: {role:req.body.role,
    affiliation:req.body.affiliation,
    firstname:req.body.firstname,
    lastname:req.body.lastname}}, {multi:true})

})


////////////////////////////////////////////////////////////////////////////////
router.post('/addtournament', (req, res, next) => {
  Address();
  function Address(){
    var coordinates = new Array()
      Address = req.body.address;
      //console.log(Address);
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: Address,
            key: "geocode key"
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
            let newTournament = new Tournament({
              judgingpool: 0,
              accomodations: 0,
              location: 0,
              scheduling: 0,
              overall: 0,
              name: req.body.name,
              startdate: req.body.startdate,//.toString(),
              enddate: req.body.enddate,//.toString(),
              eventswithbids: req.body.eventswithbids,
              bidrounds: req.body.bidrounds,
              eventswithoutbids: req.body.eventswithoutbids,
              screws: req.body.screws,
              link: req.body.link,
              address: req.body.address,
              latitude: lat,
              longitude: lng,

              // reviews: [],
            })
            Tournament.addTournament(newTournament, (err, tournament) => {
              if(err){
                  res.json({success:false, msg:"Failed to add tournament"});
                } else {
                  res.json({success: true, msg:"Tournament added"});
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
router.post('/edittournament/:id', (req, res, next) => {
  Address();
  function Address(){
    var coordinates = new Array()
      Address = req.body.address;
      //console.log(Address);
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: Address,
            key: "geocode key"
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

            db.collection("tournaments").update(
              {_id: ObjectID(req.params.id)},
              {$set: {name: req.body.name, startdate: req.body.startdate.toString(),
                enddate: req.body.enddate.toString(),
                eventswithbids: req.body.eventswithbids,
                bidrounds: req.body.bidrounds,
                eventswithoutbids: req.body.eventswithoutbids,
                screws: req.body.screws,
                link: req.body.link,
                address: req.body.address,
                latitude: lat, longitude: lng
              }})
            db.collection("reviews").update(
              {tournament: req.params.id},
              {$set: {tournamentname: req.body.name}}, {multi:true})

            }
            })
          })
          .catch(function(error){
            console.log(error);
          })
      }

})
router.post('/deletetournament/:id', (req, res, next) => {
  db.collection("tournaments").remove({_id: db.ObjectId(req.params.id)}, function(err){
      if(err){
          res.send(err);
      }
  });
})

router.post('/addreview/:tournamentid/:id', (req, res, next) => {
  var date = new Date()
  month = date.getMonth() + 1
  User.findById(req.params.id, function(err, user){
    Tournament.findById(req.params.tournamentid, function(err, tournament){
      let newReview = new Review({
        judgingpool: req.body.judgingpool,
        accomodations: req.body.accomodations,
        location: req.body.location,
        scheduling: req.body.scheduling,
        overall: req.body.overall,
        date: "" + month + "/" + date.getDate() + "/" + date.getFullYear(),
        tournament: req.params.tournamentid,
        tournamentname: tournament.name,
        userid: req.params.id,
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
        affiliation: user.affiliation,
        email: user.email,
        content: req.body.content,
        rating: 0,
        raters:[],
      })
      Review.addReview(newReview, (err, review) => {
        if(err){
            res.json({success:false, msg:"Failed to add review"});
          } else {
            res.json({success: true, msg:"Review added"});
          }
      })
    })
  })

})


router.post('/editreview/:reviewid/:id', (req, res, next) => {
  var date = new Date()
  month = date.getMonth() + 1
  User.findById(req.params.id, function(err, user){
      db.collection("reviews").update(
        {_id: ObjectID(req.params.reviewid)},
        {$set: {judgingpool: req.body.judgingpool,
        accomodations: req.body.accomodations,
        location: req.body.location,
        scheduling: req.body.scheduling,
        overall: req.body.overall,
        date: "" + month + "/" + date.getDate() + "/" + date.getFullYear(),
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
        affiliation: user.affiliation,
        content: req.body.content,
        rating: 0,
        raters:[]}})
  })

})


router.post('/averagereviews/:tournamentid', (req, res, next) => {
  db.collection("reviews").find({tournament: req.params.tournamentid}).toArray(function(err, reviews) {
  if (err) res.send(err);
  var judgingpool = 0
  var accomodations = 0
  var location = 0
  var scheduling = 0
  var overall = 0
  for (var i = 0; i < reviews.length; i++){
    judgingpool += reviews[i].judgingpool
    accomodations += reviews[i].accomodations
    location += reviews[i].location
    scheduling += reviews[i].scheduling
    overall += reviews[i].overall
  }
  if (i > 0) {
    judgingpool = judgingpool/i
    accomodations = accomodations/i
    location = location/i
    scheduling = scheduling/i
    overall = overall/i
  }
  db.collection('tournaments').update({_id: ObjectID(req.params.tournamentid)},
      {$set: {judgingpool: judgingpool, accomodations: accomodations, location: location, scheduling: scheduling, overall: overall}})
  });
})

router.post('/addreply/:reviewid/:id', (req, res, next) => {
  var date = new Date()
  month = date.getMonth() + 1
  User.findById(req.params.id, function(err, user){
    let newReply = new Reply({
      date: "" + month + "/" + date.getDate() + "/" + date.getFullYear(),
      review: req.params.reviewid,
      userid: req.params.id,
      firstname: user.firstname,
      lastname: user.lastname,
      affiliation: user.affiliation,
      role: user.role,
      content: req.body.content,
      // replies:[],
    })
    Reply.addReply(newReply, (err, review) => {
      if(err){
          res.json({success:false, msg:"Failed to add reply"});
        } else {
          res.json({success: true, msg:"Reply added"});
        }
    })
  })
})


router.post('/helpful/:reviewid/:id', (req, res, next) => {
  Review.getReviewById(req.params.reviewid, function(err, review){
    if (err) {
      res.send(err)
    }
    var raters = review.raters
    raters.push(req.params.id)
    db.collection("reviews").update({_id: ObjectID(req.params.reviewid)},
    {$set: {rating: review.rating + 1, raters:raters}}, function(err, review){
      if (err) res.send(err)
      console.log(review)
    })
  })

})

router.post("/reportreview/:reviewid/:id", (req, res, next) => {
  Review.getReviewById(req.params.reviewid, function(err, review){
    User.getUserById(req.params.id, function(err, user){
      let newReport = new Report({
        reviewid: req.params.reviewid,
        reporterid: req.params.id,
        reporteremail:user.email,
        reporterfirstname: user.firstname,
        reporterlastname: user.lastname,
        reporteraffiliation: user.affiliation,
        judgingpool: review.judgingpool,
        accomodations: review.accomodations,
        location: review.location,
        scheduling: review.scheduling,
        overall: review.overall,
        content: review.content,
        reviewerid: review.userid,
        revieweremail: review.email,
        reviewerfirstname: review.firstname,
        reviewerlastname: review.lastname,
        revieweraffiliation: review.affiliation,
        reviewdate: review.date,
        reportcontent: req.body.reportcontent,
        tournament: review.tournament,
        tournamentname: review.tournamentname
      })
      Report.addReport(newReport, (err, report)=> {
        if  (err){
          res.json({success:false, msg:"Failed to report review"});
        } else {
          res.json({success: true, msg:"review reported"});
        }
      })

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'email',
          pass: 'password'
        }
      });
      var mailOptions = {
        from: 'email',
        to: "personal email",
        subject: 'Reporting Review',
        text: newReport.reporterfirstname + " " + newReport.reporterlastname + " has reported " + review.firstname + " " + review.lastname + "'s review made on " + review.date + " for " + review.tournamentname + ". The report ratings: Overall" + review.overall + " Judging Pool: " + review.judgingpool + " Accomodations: " + review.accomodations + " Location: " + review.location + " Scheduling: " + review.scheduling + ". Content: " + review.content + ". Reason for reporting: " + newReport.reportcontent

      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    })
  })
})

router.get('/getalltournaments', (req, res, next) => {
  db.collection('tournaments').find().sort({overall:-1}).toArray(function(err, tournaments){
    if (err) res.send(err);
    res.json(tournaments)
  })
})
router.get('/gettournament/:id', (req,res,next) => {
  db.collection('tournaments').find({_id:ObjectID(req.params.id)}).toArray(function(err, tournament){
    if (err) res.send(err);
    res.json(tournament)
  })
})
router.get('/getreview/:id', (req,res,next) => {
  db.collection('reviews').find({_id:ObjectID(req.params.id)}).toArray(function(err, review){
    if (err) res.send(err);
    res.json(review)
  })
})
router.get('/getreviews/:tournamentid', (req,res,next) => {
  db.collection('reviews').find({tournament:req.params.tournamentid}).sort({$natural:-1}).toArray(function(err, reviews){
    if (err) res.send(err);
    res.json(reviews)
  })
})
router.get('/getreviews/:tournamentid', (req,res,next) => {
  db.collection('reviews').find({tournament:req.params.tournamentid}).sort({$natural:-1}).toArray(function(err, reviews){
    if (err) res.send(err);
    res.json(reviews)
  })
})
router.get('/getuserreviews/:id', (req,res,next) => {
  db.collection('reviews').find({userid:req.params.id}).sort({$natural:-1}).toArray(function(err, reviews){
    if (err) res.send(err);
    res.json(reviews)
  })
})
router.get('/getreplies/:reviewid', (req,res,next) => {
  db.collection('replies').find({review:req.params.reviewid}).toArray(function(err, replies){
    if (err) res.send(err);
    res.json(replies)
  })
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
          user: 'email',
          pass: 'tourneyrfd2020'
        }
      });
      var mailOptions = {

        to: user.email,
        from: 'email alias',
        subject: 'TourneyRFD Password Reset',
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
          user: 'email',
          pass: 'tourneyrfd2020'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'email alias',
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
