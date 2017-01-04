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
    req.user = req.params
    passport.authenticate('facebook', {
    scope: 'email',
    callbackURL: '/facebook/callback/' + req.params.id
  })(req, res, next);
});
  //

  app.get('/facebook/callback/:id', (req, res, next) => {
  passport.authenticate('facebook', {
    callbackURL: '/facebook/callback/' + req.params.id,
    scope: 'email',
    successRedirect: '/profile',
    failureRedirect: '/login'
  })(req, res, next);
});
  // app.get('/login', function(req, res, next) {
  //   passport.authenticate('local', function(err, user, info) {
  //     if (err) {
  //       return next(err);
  //     }
  //     if (!user) {
  //       return res.redirect('/login');
  //     }
  //     req.logIn(user, function(err) {
  //       if (err) {
  //         return next(err);
  //       }
  //       return res.redirect('/users/' + user.username);
  //     });
  //   })(req, res, next);
  // });

  //end social accounts
  return router
}
//
// auth/github/callback
// auth/steam/callback
// auth/linkedin/callback
// auth/google/callback
// auth/twitter/callback
// auth/facebook/callback

// req.session.user._id
// req.session.user.local
// req.session.user.iAdmin
//
// router.post('/signup', function(req, res, next) {
// 	passport.authenticate('local-signup', function(err, user, info) {
// 		if (err) {
// 			return res.status(500).json({
// 				title: 'The server turned to the dark side',
// 				error: err
// 			});
// 		}
// 		req.logIn(user, function(err) {
// 			if (err) {
// 				return next(res.status(500).json({
// 					title: 'The server turned to the dark side',
// 					error: err
// 				}));
// 			}
// 			// here redirect to profile
// 			return res.status(200).json({
// 				message: 'Success was had! You\'re logged in',
// 				obj: user
// 			});
// 		})
// 	})(req, res, next);
// });
//
// router.post('/signin', (req, res, next) => {
// 	passport.authenticate('local-login', function(err, user, info) {
// 		if (err) {
// 			return res.status(500).json({
// 				title: 'The server turned to the dark side',
// 				error: err
// 			});
// 		}
// 		req.logIn(user, function(err) {
// 			if (err) {
// 				return next(res.status(500).json({
// 					title: 'The server turned to the dark side',
// 					error: err
// 				}));
// 			}
// 			// here redirect to profile
// 			return res.status(200).json({
// 				message: 'Success was had! You\'re logged in',
// 				obj: user
// 			});
// 		})
// 	})(req, res, next);
// });

// 	User.findOne({
// 		'local.email': req.body.email
// 	}, (err, user) => {
// 		console.log(user, "user in signin");
// 		if (err) {
// 			return res.status(500).json({
// 				title: 'Bad things happened',
// 				error: err
// 			});
// 		}
// 		if (!user) {
// 			return res.status(500).json({
// 				title: 'Login failed',
// 				error: {
// 					message: 'Invalid login credentials'
// 				}
// 			});
// 		}
// 		if (!bcrypt.compareSync(req.body.password, user.password)) {
// 			return res.status(500).json({
// 				title: 'Login failed',
// 				error: {
// 					message: 'Invalid login credentials'
// 				}
// 			});
//
// 		res.status(200).json({
// 			message: 'Succesfully logged in',
// 			token: token,
// 			userId: user._id
// 		})
// 	});
// });
