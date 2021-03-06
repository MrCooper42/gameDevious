const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const multer = require('multer');
const fs = require('fs');
const mkdirp = require('mkdirp')

const User = require('../models/user.js')
const Profile = require('../models/profile.js')
const Works = require('../models/works.js')

let DIR = './server/uploads/';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    mkdirp.sync(DIR)
    console.log(DIR, "DIR");
    cb(null, DIR);
  },
  filename: function(req, file, cb) {
    let datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
})

const upload = multer({storage: storage}).single('file');

router.post('/avatar', (req, res, next) => {
  let token = req.headers.authorization;
  console.log(req.headers, "headers");
  let decoded = jwt.decode(token);
  console.log(decoded, "params");
  DIR = `./server/uploads/${decoded.user._id}/avatar`
  upload(req, res, (err) => {
    console.log(req.file, "req.file");
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    Profile.findOne({
      user: decoded.user._id
    }, (err, profile) => {
      if (err) {
        return res.status(500).json({title: 'Bad things happened', error: err});
      }
      profile.avatar = `/uploads/${decoded.user._id}/avatar/${req.file.filename}`;
      console.log(profile.avatar, "avatar after");
      profile.save((err, result) => {
        if (err) {
          return res.status(500).json({title: 'Bad things happened', error: err});
        }
        console.log(result, "user save result");
      })
    })
    res.json({error_code: 0, err_desc: null});
  });
})

router.post('/works/:id/avatar', (req, res, next) => {
  const upload = multer({storage: storage}).single('avatar');
  let token = req.headers.authorization;
  let decoded = jwt.decode(token);
  console.log(req.params.folder, "params");
  DIR = `./server/uploads/${decoded.user._id}/${req.params.folder}`
  upload(req, res, (err) => {
    console.log(req.file, "req.file");
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    Profile.findOne({
      user: decoded.user._id
    }, (err, profile) => {
      if (err) {
        return res.status(500).json({title: 'Bad things happened', error: err});
      }
      if (req.params.folder == "avatar") {
        profile.avatar = `/uploads/${decoded.user._id}/${req.params.folder}/${req.file.filename}`;
        console.log(profile.avatar, "avatar after");
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({title: 'Bad things happened', error: err});
          }
          console.log(result, "user save result");
        })
      }
      if (req.params.folder == "works") {
        cosole.log("works hit")
      }
      console.log(req.params);
    })
    console.log("hit here and ending");
    res.json({error_code: 0, err_desc: null});
  });
})

router.post('/works/:id/file', (req, res, next) => {
  console.log("route hit");
  console.log(req.headers);
  const upload = multer({storage: storage}).single('file');
  let token = req.headers.authorization;
  let decoded = jwt.decode(token);
  console.log(req.params.folder, "params");
  DIR = `./server/uploads/${decoded.user._id}/works/${req.params.id}/file`
  upload(req, res, (err) => {
    console.log(req.file, "req.file");
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    Works.findById(req.params.id, (err, work) => {
      console.log(work, "work round");
      if (err) {
        return res.status(500).json({title: 'Bad things happened', error: err});
      }
      work.path = `/uploads/${decoded.user._id}/works/${req.params.id}/file/${req.file.filename}`
      console.log(work.path, "work path after");
      work.save((err, result) => {
        if (err) {
          return res.status(500).json({title: 'Bad things happened', error: err});
        }
        console.log(result, "work save");
      })
      console.log("hit here and ending");
      res.json({error_code: 0, err_desc: null});
    });
  })
})

module.exports = router;
