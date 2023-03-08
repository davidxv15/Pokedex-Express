const express = require('express');
const app = express();

const pokemonController = require('./controllers/pokemon');

app.set('view engine', 'ejs');

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