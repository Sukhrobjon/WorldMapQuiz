// requirements
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

// handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home', { msg: 'Qonday bolyappa'});
})

app.listen(port, () => {
    console.log('App listening on port 3000!')
})