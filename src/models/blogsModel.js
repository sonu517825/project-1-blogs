const mongoose = require('mongoose'); 
const ObjectId = mongoose.Types.ObjectId; 

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    authorId:{
        type: ObjectId,
        ref: 'Author',
        required: true
    },
    tags: [String],
    category: {
        type: String, 
        required: true
    },
    subcategory: [String],
    deletedAt: Date, 
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: Date,
    isPublished: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
}); 

module.exports = mongoose.model('Blog', blogSchema); //db collection name will be in blogs



