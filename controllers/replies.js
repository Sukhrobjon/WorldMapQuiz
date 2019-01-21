const Reply = require('../models/reply.js')
const Replies = function(app) {
    
    // REPLY: CREATE
    app.post('/comments/replies', (req, res) => {
        console.log('reply created')
        Reply.create(req.body).then((reply) => {
            console.log(reply)
            res.redirect(`/comments/${reply.commentId}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // REPLY: DELETE
    app.delete('/comments/replies/:id', function (req, res) {
        console.log("DELETE comment")
        Reply.findByIdAndRemove(req.params.id).then((reply) => {
            res.redirect(`/comments/${reply.commentId}`);
        }).catch((err) => {
            console.log(err.message);
        })
    });
}
    
module.exports = Replies;