const express = require('express');
const router = express.Router();

//this route means /pokemon
router.get('/', (req, res) => {
    res.render('pokemon/index.ejs')
})

module.exports = router;