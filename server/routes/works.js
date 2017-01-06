'use strict'

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Profile = require('../models/profile');
const Works = require('../models/works');
const jwt = require('jsonwebtoken');

router.use('/', (req, res, next) => {
  jwt.verify(req.headers.token, 'secret', this.ignoreExpiration = true, (err, decoded) => err ? res.status(401).json({
    title: 'Not Authenticated ya here',
    error: err
  }) : next())
});

// CREATE
router.post("/", (req, res) => {
  let token = req.headers.token;
  jwt.verify(token, 'secret', this.ignoreExpiration = true, (err, decoded) => {
    if (err) {
      console.log(err, "errrrrorrrrr title");
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        console.log(profile, "profile found");
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        let newWork = new Works({
          title: req.body.title,
          url: req.body.url,
          video: req.body.video,
          description: req.body.description,
          author: decoded.user._id
        });
        console.log(req.body, "body");
        console.log(newWork, "newWork");
        newWork.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          profile.works.push(result._id);
          profile.save((err, saved) => {
            if (err) {
              return res.status(500).json({
                title: 'Bad things happened',
                error: err
              });
            }
            res.status(201).send(result)
          })
        })
      })
    }
  })
});

// DELETE
router.delete("/:id", (req, res, next) => {
  let decoded = jwt.decode(req.headers.token);
  Works.findById(req.params.id, (err, work) => {
    if (err) {
      return res.status(500).json({
        title: 'Bad things happened',
        error: err
      });
    }
    if (!work) {
      return res.status(500).json({
        title: 'No Works Found!',
        error: {
          message: 'Works not found'
        }
      })
    }
    if (work.author != decoded.user._id) {
      return res.status(401).json({
        title: 'This is not your work',
        error: {
          message: 'Go make your own'
        }
      });
    }
    work.remove((err, result) => {
      if (err) {
        return res.status(500).json({
          title: 'Bad things happened',
          error: err
        });
      }
      res.status(200).json({
        message: 'Message was deleted',
        obj: result
      });
    });
  });
});

module.exports = router;
