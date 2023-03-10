const express = require('express');

//use router in controllers instead of app. Instead of just express(), it's express.Router(). Simplifies export of all routes of entire file.
const router = express.Router();
//This says that I want the value of the Pokemon from the object that was exported. this is our ES6 destructuring syntax. If I point it to a directory, it automatically assumes an index.js file.
const { Pokemon } = require('../models');

let mySeedData = [
    {
        name: "Bulbasaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
    }, {
        name: "Ivysaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
    }, {    
        name: "Venusaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"

    }
]

//this route means '/pokemon' in browser
router.get('/', async (req, res, next) => {
    try {
        // let myPokemon;
        // if(req.query.s) {
        //     myPokemon = await Pokemon.find({name: req.query.s})
        // } else {
        //     myPokemon = await Pokemon.find({})
        // }
        const myPokemon = await Pokemon.find({})
        console.log(myPokemon);
        res.render('pokemon/index.ejs', {pokemon:
        myPokemon});
       
        // res.render('pokemon/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
});

router.get('/seed', async (reg, res, next) => {
    try {
        const deletedOldOnes = await Pokemon.deleteMany({})
        const addPokemon = await Pokemon.insertMany(mySeedData);
        console.log(addPokemon);
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err);
        return next();
    }
})


router.get('/new', (req, res) => {
    res.render('pokemon/new.ejs');
});

router.get('/:id', async (req, res, next) => {
    try {
        console.log(req.params)
        // you can find the name and find will return all of the names that match nut always in an array, even if it's only finding one of them. or you can do findOne to find the first one and only that one and it'll be an object.
        //const pokemon = await Pokemon.findById({name: req.params.name});
        const pokemon = await Pokemon.findById(req.params.id);
        //const pokemon = await Pokemon.findOne({name: req.params.name})
        console.log(pokemon);
        const context = {
            pokemon: pokemon
        }
        res.render('pokemon/show.ejs', context);
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/new', (req, res) => {
    res.render('pokemon/new.ejs');
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const monToEdit = await Pokemon.findById(req.params.id);
        console.log(monToEdit);
        res.render('pokemon/edit.ejs', {monToEdit: monToEdit})
    } catch(catsAreCool) {
            console.log(catsAreCool);
            return next();
        
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newPokemon = await Pokemon.create(req.body);
        mySeedData.push(newPokemon);
        console.log(newPokemon);
        res.redirect('/pokemon');
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        const updateItem = await Pokemon.findByIdAndUpdate(req.params.id, req.body);
        console.log(updateItem);
        res.redirect('/pokemon');
    } catch(dogsAreBetter) {
        console.log(dogsAreBetter);
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        console.log(req.params);
        console.log("im hitting the delete route");
        const itemGettingDeleted = await Pokemon.findByIdAndDelete(req.params.id);
        console.log(itemGettingDeleted);
        res.redirect('/pokemon');
    } catch(stuff) {
        console.log(stuff);
        return next();
    }
})

module.exports = router;