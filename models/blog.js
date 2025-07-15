const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    content: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
    },
    coverImage: {
        type: String,
        required: false
    },
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;