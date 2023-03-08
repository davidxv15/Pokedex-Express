const express = require('express');

//use router in controllers instead of app. Instead of just express(), it's express.Router(). Simplifies export of all routes of entire file.
const router = express.Router();
//This says that I want the value of the Pokemon from the object that was export. this is our ES6 destructuring syntax
const { Pokemon } = require('../models')

//this route means '/pokemon' in browser
router.get('/', async (req, res, next) => {
    try {
        const myPokemon = await Pokemon.find({})
        console.log(myPokemon);
        const context = {
            pokemon: myPokemon
        }
         res.render('pokemon/index.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
});

router.post('/', async (rec, res, next) => {
    try {
        const myNewPokemon = await Pokemon.create(req.body);
        console.log(myNewPokemon);
    } catch(err) {
        console.log(err);
    return next();
    }
})

module.exports = router;