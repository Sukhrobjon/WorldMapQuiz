// requirements
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

// handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// OUR MOCK ARRAY OF PROJECTS
let comments = [
  { title: "Great Review", content: "content" },
  { title: "Awesome Movie", content: "content"}
]

// INDEX
app.get('/', (req, res) => {
  res.render('comments-index', { comments: comments });
})


app.listen(port, () => {
    console.log('App listening on port 3000!')
})