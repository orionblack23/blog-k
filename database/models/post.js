const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {collection: 'post-data'});

const postData = mongoose.model('postData', postSchema);

module.exports = postData;