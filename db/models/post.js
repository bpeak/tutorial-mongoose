var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    title: { type : String, required : true },
    author: { type : String, required : true },
})

module.exports = mongoose.model('post', postSchema)