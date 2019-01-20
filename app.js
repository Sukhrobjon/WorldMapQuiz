// requirements
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to the MongoDB 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LearnGeography');
// comment model - Data layer
const Comment = mongoose.model('Review', {
    title: String,
    content: String
});

// INDEX
app.get('/', (req, res) => {
  Comment.find()
    .then(comments => {
      res.render('comments-index', { comments: comments });
    })
    .catch(err => {
      console.log(err);
    })
})
// NEW
app.get('/comments/new', (req, res) => {
    res.render('comments-new', {});
})
// CREATE
app.post('/comments', (req, res) => {
    Comment.create(req.body).then((comment) => {
        console.log(comment);
        res.redirect(`/comments/${comment._id}`) // Redirect to reviews/:id/${review._id}`) // Redirect to reviews/:id
    }).catch((err) => {
        console.log(err.message);
    })
})

// SHOW
app.get('/comments/:id', (req, res) => {
    Comment.findById(req.params.id).then((comment) => {
        res.render('comments-show', {
            comment: comment
        })
    }).catch((err) => {
        console.log(err.message);
    })
})
app.listen(port, () => {
    console.log('App listening on port 3000!')
})