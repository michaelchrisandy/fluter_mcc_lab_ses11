var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('film');
});

router.get('/getFilm', function(req, res, next) {
    const obj={
        "name" : "Vito",
        "age" : 10
    }
    
    res.send(obj);
});

router.get('/getFilm/:id', function(req, res, next) {
    const id = req.params.id;
    
    res.send(req.params);
});

router.post('/insert-new', function(req, res){
    res.send()
});

module.exports = router;


