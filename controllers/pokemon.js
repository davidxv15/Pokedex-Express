const express = require('express');

//use router in controllers instead of app. Instead of just express(), it's express.Router(). Simplifies export of all routes of entire file.
const router = express.Router();
//This says that I want the value of the Pokemon from the object that was export. this is our ES6 destructuring syntax. If I point it to a directory, it automatically assumes an index.js file.
const { Pokemon } = require('../models')

//this route means '/pokemon' in browser
router.get('/', async (req, res, next) => {
    try {
        const myPokemon = await Pokemon.find({})
        console.log(myPokemon);
        const context = {
            pokemon: myPokemon
        }
         res.render('pokemon/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
});

router.get('/new', (req, res) => {
    res.render('pokemon/new.ejs')
});

router.post('/', async (rec, res, next) => {
    try {
       console.log(req.body);
       res.redirect('/pokemon')
    } catch(err) {
        console.log(err);
    return next();
    }
})

module.exports = router;