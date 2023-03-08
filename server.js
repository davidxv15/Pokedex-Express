//I need to have express, then invoke it as 'app' per the documentation
const express = require('express');
const app = express();

//this brings the exports from my pokemon controller
const pokemonController = require('./controllers/pokemon');

//this is setting up that ejs will be used in this project and it will be set to a directory named views. The directory must be named views.
//this goes through the views dir, also the ejs
app.set('view engine', 'ejs');

//connecting this to CSS files and any DOM manipulation
app.use(express.static('public'));

//Ensure a generic home route first but also want pokemon controller to be read before any * or catch all.

//my routes
app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('/pokemon', pokemonController);

//404 - always last in routes, it's 'wildcard' = error
app.get('/*', (req, res) => {
    res.render('404.ejs');
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
})