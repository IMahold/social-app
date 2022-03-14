const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    likes: {
        type: []
    },
    image: {
        type: String
    }

    
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post