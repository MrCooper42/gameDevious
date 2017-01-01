'use strict'

const passport = require('passport');
// const jwt = require('jsonwebtoken')
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const SteamStrategy = require('passport-steam').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GithubStrategy = require('passport-github2').Strategy;

const User = require('../server/models/user');
const configAuth = require('./auth');

module.exports = function(passport) {
  //
  // function init() {

  passport.serializeUser((user, done) => {
    delete user.password; // still passed in
    delete user.isAdmin; // still passed in
    console.log(user, "user serial");
    done(null, user)
  });

  passport.deserializeUser((user, done) => {
    User.findById(user._id, (err, user) => {
      delete user.password; // still passed in
      delete user.isAdmin; // still passed in
      console.log(user, "user deserial");
      done(err, user);
    });
  });

  // passport.use('local-signup', new LocalStrategy({
  //   usernameField: 'email',
  //   passwordField: 'password',
  //   passReqToCallback: true
  // }, (req, email, password, done) => {
  //   process.nextTick(() => {
  //     User.findOne({
  //       'local.email': email
  //     }, (err, user) => {
  //       if (err) {
  //         console.log("error in signup: " + err);
  //         return done(err)
  //       }
  //       if (user) {
  //         console.log("User exists");
  //         return done(null, false);
  //       } else {
  //         console.log(req.body, "body");
  //         console.log(req.param, "param");
  //         let newUser = new User();
  //         newUser.local.firstName = req.body.firstName
  //         newUser.local.lastName = req.body.lastName
  //         newUser.local.email = email;
  //         newUser.local.password = newUser.generateHash(password);
  //
  //         newUser.save((err) => {
  //           if (err) {
  //             throw err;
  //           }
  //           return done(null, newUser);
  //         });
  //       }
  //     });
  //   });
  // }));
  //
  // passport.use('local-login', new LocalStrategy({
  //   usernameField: 'email',
  //   passwordField: 'password',
  //   passReqToCallback: true
  // }, (req, email, password, done) => {
  //   console.log(email, "here in passport");
  //   User.findOne({
  //     'local.email': email
  //   }, (err, user) => {
  //     if (err) {
  //       return done(err);
  //     }
  //     if (!user) {
  //       return done(null, false);
  //     }
  //     if (!user.validatePassword(password)) {
  //       return done(null, false);
  //     } else {
  //       return done(null, user);
  //     }
  //   });
  // }));

  //social logins

  // FACEBOOK =========================================================================

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    passReqToCallback: true
  }, function(req, token, refreshToken, profile, done) {
    console.log(req.headers.user_id, "headers");
    User.findById(req.headers.user_id, (err, reqUser) => {
      if (err) {
        console.log(err, "erroz had");
      } else {
        console.log(reqUser, "reqUser in passport");
        // async
        process.nextTick(function() {
          // already logged in
          if (!reqUser) {

            User.findOne({
              'facebook.id': profile.id
            }, function(err, user) {
              if (err)
                return done(err);

              if (user) {
                //user but no token
                if (!user.facebook.token) {
                  user.facebook.token = token;
                  user.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;
                  user.facebook.email = profile.emails[0].value;

                  user.save(function(err) {
                    if (err)
                      throw err;
                    return done(null, user);
                  });
                }

                return done(null, user);
              } else {
                // if there is no user create // delete this bit
                var newUser = new User();

                newUser.facebook.id = profile.id;
                newUser.facebook.token = token;
                newUser.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;
                newUser.facebook.email = profile.emails[0].value;

                newUser.save(function(err) {
                  if (err)
                    throw err;
                  return done(null, newUser);
                });
                console.log("no user send error here");
              }
            });
          } else {
            var user = req.user;

            user.facebook.id = profile.id;
            user.facebook.token = token;
            user.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;
            user.facebook.email = profile.emails[0].value;

            user.save(function(err) {
              if (err)
                throw err;
              return done(null, user);
            });

          }
        });
      }
    })
  }));

  // TWITTER ========================================================================

  passport.use(new TwitterStrategy({
    consumerKey: configAuth.twitterAuth.consumerKey,
    consumerSecret: configAuth.twitterAuth.consumerSecret,
    callbackURL: configAuth.twitterAuth.callbackURL,
    passReqToCallback: true
  }, function(req, token, tokenSecret, profile, done) {
    process.nextTick(function() {
      if (!req.user) {
        User.findOne({
          'twitter.id': profile.id
        }, function(err, user) {
          if (err)
            return done(err);

          if (user) {
            //user exists but no token
            if (!user.twitter.token) {
              user.twitter.token = token;
              user.twitter.username = profile.username;
              user.twitter.displayName = profile.displayName;

              user.save(function(err) {
                if (err)
                  throw er;
                return done(null, user);
              });
            }

            return done(null, user);
          } else {
            // if no user create them
            var newUser = new User();

            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.username = profile.username;
            newUser.twitter.displayName = profile.displayName;

            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      } else {
        // user exists and logged in, link accounts
        var user = req.user;

        user.twitter.id = profile.id;
        user.twitter.token = token;
        user.twitter.username = profile.username;
        user.twitter.displayName = profile.displayName;

        user.save(function(err) {
          if (err)
            throw err;
          return done(null, user);
        });
      }

    });

  }));

  // GOOGLE ===========================================================================

  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    passReqToCallback: true
  }, function(req, token, refreshToken, profile, done) {
    process.nextTick(function() {
      if (!req.user) {
        User.findOne({
          'google.id': profile.id
        }, function(err, user) {
          if (err)
            return done(err);

          if (user) {
            //user id but no token (unlinked)
            if (!user.google.token) {
              user.google.token = token;
              user.google.name = profile.displayName;
              user.google.email = profile.emails[0].value; // pull the first email <--?

              user.save(function(err) {
                if (err)
                  throw err;
                return done(null, user);
              });
            }

            return done(null, user);
          } else {
            var newUser = new User();

            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;

            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, user);
            });
          }
        });

      } else {
        // user logged in and trying to link account
        var user = req.user;

        user.google.id = profile.id;
        user.google.token = token;
        user.google.name = profile.displayName;
        user.google.email = profile.emails[0].value;

        user.save(function(err) {
          if (err)
            throw err;
          return done(null, user);
        });
      }
    });
  }));

  // LINKEDIN ====================================================================

  //needs work
  passport.use(new LinkedInStrategy({
    consumerKey: configAuth.linkedinAuth.consumerKey,
    consumerSecret: configAuth.linkedinAuth.consumerSecret,
    callbackURL: configAuth.linkedinAuth.callbackURL
  }, function(token, tokenSecret, profile, done) {
    User.findOrCreate({
      linkedinId: profile.id
    }, function(err, user) {
      return done(err, user);
    });
  }));

  // STEAM =====================================================================

  // GITHUB ====================================================================

  passport.use(new GithubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL
  }, function(req, accessToken, refreshToken, profile, done) {
    console.log(req.params, "req in passport");
    User.findOrCreate({
      githubId: profile.id
    }, function(err, user) {
      return done(err, user);
    });
  }));
};
