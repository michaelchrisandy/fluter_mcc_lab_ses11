var express = require('express');
var router = express.Router();
var db = require('./connect');


// Get all films
// http://localhost:3000/films
router.get('/', function(req, res) {
    const query = "SELECT * FROM films";
    db.query(query, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

module.exports = router;
