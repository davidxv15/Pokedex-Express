const express = require('express');
const app = express();

const pokemonController = require('./controllers/pokemon');

//this goes through the views dir, also the ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

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