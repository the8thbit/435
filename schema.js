//====================================
//CONNECTS TO MONGODB AND LOADS UP ALL SCHEMAS
//NOTE: REMOVED MONK NOW USING MONGOOSE
//MONGOOSE PROVIDES EASY MODEL AND SCHEMA DESIGN IMPLEMENTATION
//====================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatappdb');
User = require('./schemas/user-schema.js');

var testUser = new User({
	username: 'testUser',
	password: 'testPassword'
});

testUser.save();
