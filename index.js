const express = require('express');
const exphbs  = require('express-handlebars');
const { engine } = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home')
})




app.listen(PORT, function () {
    console.log('app running on port 3017')
})