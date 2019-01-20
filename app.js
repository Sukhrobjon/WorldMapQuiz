// requirements
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

// handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// OUR MOCK ARRAY OF PROJECTS

// let comments = [
//   { title: "Great Review", content: "content" },
//   { title: "Awesome Movie", content: "content"}
// ]


// Connecting to the MongoDB 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LearnGeography');
// comment model - Data layer
const Comment = mongoose.model('Review', {
  title: String,
  content: String
});

app.get('/', (req, res) => {
  Comment.find()
    .then(comments => {
      res.render('comments-index', { comments: comments });
    })
    .catch(err => {
      console.log(err);
    })
})


app.listen(port, () => {
    console.log('App listening on port 3000!')
})