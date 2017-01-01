const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	path: {
		type: String,
		required: true
	},
	url: {
		type: String
	},
	image: {
		type: String
	},
	description: {
		type: String
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	created: {
		type: Date,
	}
})

module.exports = mongoose.model('Works', schema);
