const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type:String,
        

    },
    image: {
        type: String
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User