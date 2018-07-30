const mongoose = require('mongoose')
const MONGO_PORT = 27017
const MONGO_DBNAME = 'test'
const url = `mongodb://localhost:${MONGO_PORT}/${MONGO_DBNAME}`

module.exports = () => {
    mongoose.connect(url, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
        console.log('mongodb connected success by mongoose')
    })

    const model = require('./models/')
    return model
}

