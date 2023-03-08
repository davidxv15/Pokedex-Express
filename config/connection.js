require('dotenv').config();
const mongoose = require('mongoose')

connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString);