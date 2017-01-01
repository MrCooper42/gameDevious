'use strict'

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const cors = require('cors');
const jwt = require('express-jwt');
const passport = require('passport');
require('../config/passport')(passport);
const mongoose = require('mongoose');
// moment would be good to add

const app = express();
mongoose.connect(process.env.MONGOURI);

const appRoutes = require('./routes/app');
const authRoutes = require('./routes/auth')(app, passport);

const originsWhitelist = [
  'http://localhost:3000',      //this is my front-end url for development
  //  'http://www.myproductionurl.com'
];
const corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());

// passport and auth
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());

// CORS
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// 	res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Credentials', true);
// 	next();
// });

app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//pass local user variable
// app.use(function(req, res, next){
//   res.locals.currentUser = req.user;
//   next();
// });


app.use('/', appRoutes);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => res.render('index'));

module.exports = app;
