'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Profile = require('../models/profile');

router.post('/', (req, res, next) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 12),
    email: req.body.email
  });
  user.save((err, result) => {
    if (err) {
      return res.status(500).json({title: 'Bad things happened', error: err});
    }
    let profile = new Profile({user: result._id})
    profile.save((err, result) => {
      if (err) {
        return res.status(500).json({title: 'Bad things happened', error: err});
      }
      user.profile = result._id
      user.save((err, result) => {
        if (err) {
          return res.status(500).json({title: 'Bad things happened', error: err});
        }
      })
    })
    console.log(result, "result user created");
    res.status(201).json({message: 'User Created', obj: result})
  })
});

router.get('/:id', (req, res, next) => {
  console.log("here");
  User.findById(req.params.id)
  .populate("profile").exec((err, user) => {
    if (err) {
      return res.status(500).json({title: 'Bad things happened', error: err});
    }
    Profile.populate(user.profile, {path: 'works'}, (err, doc) => {
      return res.send(user)
    })
  })
})

router.post('/signin', (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) {
      return res.status(500).json({title: 'Bad things happened', error: err});
    }
    if (!user) {
      return res.status(500).json({
        title: 'Login failed',
        error: {
          message: 'Invalid login credentials'
        }
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(500).json({
        title: 'Login failed',
        error: {
          message: 'Invalid login credentials'
        }
      });
    }
    var token = jwt.sign({
      user: user
    }, 'secret', {expiresIn: 5000000});
    console.log(user, "user signed in");
    res.status(200).cookie('token', token).json({message: 'Succesfully logged in', token: token, userId: user._id})
  });
});

module.exports = router;
