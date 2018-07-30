var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    nick: { type : String, required : true },
    name: { type : String, required : true },
})

module.exports = mongoose.model('user', userSchema)