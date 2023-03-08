const mongoose = require('mongoose');

//const schema = new mongoose.Schema (another way to set up a schema)

const pokemonSchema = new mongoose.Schema(
    {
        //name field is required to be a string
        name: {
            type: String,
            required: [true, "Name"]
        },
        //image field is a string; it's required and must be unique
        image: {
            type: String,
            required: [true, "Please provide URL for Pokemon image"],
            unique: [true, "Image used, please provide a new image"]
        },
        //Pokemon "type" is not required; if entered, it will be a string
        type: {
            type: String,
        }    
    },
    {
        timestamps: true
    }
);

//mongoose.model(<mongodb collection name>, our shema) is the general default, it creates a collection inside of mongoDB that is named from the first argument, which is "Pokemon" here. It applies the schema above, to that collection.
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;