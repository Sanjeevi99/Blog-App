const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//schema defines the structure and content of the data.
// things used inside of {} are validations.

const UserSchema = new Schema({
    username: {type: String, required: true, min:4, unique: true},
    password: {type: String, required: true}
});

//model is a wrapper of mongoose schema.

const UserModel = model('User', UserSchema);

module.exports = UserModel;