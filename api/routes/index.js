var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users.controller.js');
var ctrlArticals = require('../controllers/articals.controller.js');
router
  .route('/')
  .get(function(req,res){
    res.json({message: "this is api router"});
  });


router
  .route('/users')
  .get(function(req,res){
    res.json({message: "this is users router"});
  });

router
  .route('/register')
  .post(ctrlUsers.register);

router
  .route('/login')
  .post(ctrlUsers.login);

// articles
router
  .route('/articals')
  .get(ctrlArticals.getAll);
router
  .route('/articals/new')
  .post(ctrlArticals.createOne);  


module.exports = router;