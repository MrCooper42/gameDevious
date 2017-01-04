const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');


const schema = new Schema({
	path: {
		type: String,
	},
	title: {
		type: String,
		required: true
	},
	url: {
		type: String
	},
	video : {
		type: String
	},
	avatar: {
		type: String
	},
	description: {
		type: String
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})

module.exports = mongoose.model('Works', schema);
