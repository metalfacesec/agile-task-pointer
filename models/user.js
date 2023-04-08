var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    role:     String,
});

// User.prototype.test = () => {
//     console.log("!!!!!! test called");
// }

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);