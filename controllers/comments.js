const Comment = require('../models/comment.js')
const Reply = require('../models/reply.js');

const Comments = function (app) {

    // INDEX
    app.get('/', (req, res) => {
    Comment.find()
        .then(comments => {
            res.render('comments-index', { comments: comments });
        })
        .catch(err => {
            console.log(err);
        })
    });

    // NEW
    app.get('/comments/new', (req, res) => {
        res.render('comments-new', {});
    })
    // CREATE
    app.post('/comments', (req, res) => {
        Comment.create(req.body).then((comment) => {
            console.log(comment);
            res.redirect(`/comments/${comment._id}`) 
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // SHOW
    app.get('/comments/:id', (req, res) => {
        Comment.findById(req.params.id).then((comment) => {
            Reply.find({
               commentId: comment._id
            }).then(replies => {
               res.render('comments-show', {
                   comment: comment,
                   replies: replies
               });
           });
        }).catch((err) => {
           console.log(err.message);
        })
    });

    // EDIT
    app.get('/comments/:id/edit', (req, res) => {
        Comment.findById(req.params.id, function (err, comment) {
            res.render('comments-edit', {
                comment: comment
            });
        })
    });

    // UPDATE
    app.put('/comments/:id', (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body)
            .then(comment => {
                res.redirect(`/comments/${comment._id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    });

    // DELETE
    app.delete('/comments/:id', function (req, res) {
        console.log("Comment Deleted")
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })
    })

}

module.exports = Comments 