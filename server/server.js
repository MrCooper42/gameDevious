'use strict'

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const login = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const cors = require('cors');
const ejwt = require('express-jwt');
const passport = require('passport');
require('../config/passport')(passport);
const mongoose = require('mongoose');
// moment would be good to add

const app = express();
mongoose.connect(process.env.MONGOURI);

const appRoutes = require('./routes/app');

// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, '../public/src', 'favicon.ico')));
app.use(login('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());

// passport and auth
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// app.use(cors());

// CORS
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const authRoutes = require('./routes/auth')(app, passport);

app.use('/', appRoutes);
app.use('/auth', ejwt({secret: 'secret'}), authRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => res.render('index'));

module.exports = app;
