// I need to have express, then invoke it as 'app' per the documentation
const express = require('express');
const app = express();

// this brings the exports from my pokemon controller
const pokemonController = require('./controllers/pokemon');

// this is setting up that ejs will be used in this project and it will be set to a directory named views. The directory must be named views.
// this goes through the views dir, also the ejs
app.set('view engine', 'ejs');

// connecting this to CSS files and any DOM manipulation in the public folder
app.use(express.static('public'));

// forms do not come in the way i would want them to normally. I need to make sure I parse the info so that it works alongside EJS. Parses the into in express into something that will ne in the req.body
// you can also npm i body-parser and then invoke it and do the same.
app.use(express.urlencoded({ extended: false}))

// Ensure a generic home route first but also want pokemon controller to be read before any * or catch all.

// my routes
app.get('/', (req, res) => {
    res.render('home.ejs');
})

//app.use is saying I want to use all of the imports from my pokemon controller. And the first argument is saying the base URL is now http://localhost:4000/pokemon when that file is read.

app.use('/pokemon', pokemonController);

// 404 - always last in routes, it's 'wildcard' = error
app.get('/*', (req, res) => {
    res.render('404.ejs');
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
})