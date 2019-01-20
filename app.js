// requirements
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// Controllers
const comments = require('./controllers/comments');

// Connecting to the MongoDB 
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/LearnGeography", {
    useNewUrlParser: true
});


// handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));

comments(app)

app.listen(port, () => {
    console.log('App listening on port 3000!')
})