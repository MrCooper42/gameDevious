'use strict'

const express = require('express');
const cors = require('cors');
const User = require('../models/user');
const ejwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const router = express.Router();

const isLoggedIn = (req, res, next) => {;
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

module.exports = function(app, passport) {

  app.use(session({
    secret: 'superSecret',
    cookie: {
      maxAge: 60000
    }
  }))

  app.use(cors())

  router.get('/ping', function(req, res) {
    res.status(200).send("pong!");
  });
  //start social accounts

  app.get('/github/:id', (req, res, next) => {
    passport.authenticate('github', {
      callbackURL: '/github/callback/' + req.params.id
    })(req, res, next);
  });

  app.get('/github/callback/:id', (req, res, next) => {
    passport.authenticate('github', {
      callbackURL: '/github/callback/' + req.params.id,
      successRedirect: '/profile',
      failureRedirect: '/login'
    })(req, res, next);
  });

  app.get('/facebook/:id', (req, res, next) => {
    passport.authenticate('facebook', {
    scope: 'email',
    callbackURL: '/facebook/callback/' + req.params.id
  })(req, res, next);
});
  //

  app.get('/facebook/callback/:id', (req, res, next) => {
  passport.authenticate('facebook', {
    callbackURL: '/facebook/callback/' + req.params.id,
    successRedirect: '/profile',
    failureRedirect: '/login'
  })(req, res, next);
});
// 
//   app.get('/linkedin/:id', (req, res, next) => {
//     req.user = {user:"i am a user"}
//     passport.authenticate('linkedin', {
//     scope: ['r_basicprofile', 'r_emailaddress'],
//     callbackURL: '/linkedin/callback/'
//   })(req.params = "paramas", res, next);
// });
//   //
//
//   app.get('/linkedin/callback/:id', (req, res, next) => {
//   passport.authenticate('linkedin', {
//     callbackURL: '/linkedin/callback/',
//     successRedirect: '/profile',
//     failureRedirect: '/login'
//   })(req, res, next);
// });

  //end social accounts
  return router
}
