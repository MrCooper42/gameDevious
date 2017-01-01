const express = require('express');
const passport = require('passport');
const router = express.Router();
// const app = require('../server.js')

const api = require('./api');
const user = require('./user');
// const auth = require('./auth')(app, passport);
const upload = require('./upload');
const profile = require('./profile');
const blog = require('./blog');
const comment = require('./comment');

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});

router.use('/api', api);
router.use('/user', user);
// router.use('/auth', auth)
router.use('/upload', upload);
router.use('/profile', profile);
router.use('/blog', blog);
router.use('/comment', comment);

module.exports = router;
