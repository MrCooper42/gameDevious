const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//use moment

const User = require('./user');
const Blog = require('./blog');
const Works = require('./works');

const schema = new Schema({
  title: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  experiance: [
    {
      company: {
        type: String,
        default: ''
      },
      roll: {
        type: String,
        default: ''
      },
      dates: {
        type: Date // get a date range?
      },
      description: {
        type: String,
        default: ''
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        default: ''
      },
      study: {
        type: String,
        default: ''
      },
      degree: {
        type: String,
        default: ''
      },
      dates: {
        type: Date // get date range?
      },
      extras: {
        type: String,
        default: ''
      }
    }
  ],
  skills: [
    {
      type: String,
      default: ''

    }
  ],
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  works: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Works'
    }
  ],
  blog: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
});

module.exports = mongoose.model('Profile', schema);
