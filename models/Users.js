const mongoose = require('mongoose');

//const schema = new mongoose.Schema (another way to set up a schema)

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter user name"],
            unique: [true, "User name already exists, choose another."],   
        },
        password: {
            type: String,
            required: [true, "Please enter password"],
        },
        type: {
            type: String,
            required: [true, "Please input type"]
        }    
    },
    {
        timestamps: true
    }
);

//mongoose.model(<mongodb collection name>, our shema)
const Pokemon = mongoose.model('Pokemon', pokemonShema);

module.exports = Pokemon;