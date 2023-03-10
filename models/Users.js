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
    },
    {
        timestamps: true
    }
);

//mongoose.model(<mongodb collection name>, our shema)
const Users = mongoose.model('Users', userSchema);

module.exports = Users;