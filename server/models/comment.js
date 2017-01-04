var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//use moment for date

var User = require('./user')

var schema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    created: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Comment', schema);
