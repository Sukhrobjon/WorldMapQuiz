const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Reply = mongoose.model('Reply', {
    title: String,
    commentId: { type: Schema.Types.ObjectId, ref: 'Comment'}
});

module.exports = Reply;