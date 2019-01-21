const Reply = require('../models/reply.js')
const Replies = function(app) {
    
    // REPLY: CREATE
    app.post('/comments/replies', (req, res) => {
        console.log('comment created')
        Reply.create(req.body).then((reply) => {
            console.log(reply)
            res.redirect(`/comments/${reply.commentId}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });
}
    
module.exports = Replies;