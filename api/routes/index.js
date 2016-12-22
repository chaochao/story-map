var express = require('express');
var router = express.Router({
  mergeParams: true
});

var ctrlUsers = require('../controllers/users.controller.js');
var ctrlArticals = require('../controllers/articals.controller.js');
var ctrlComment = require('../controllers/comment.controller.js');
router
  .route('/')
  .get(function(req,res){
    res.json({message: "this is api router"});
  });


router
  .route('/users')
  .get(ctrlUsers.getAll);

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

router
  .route('/articals/:id')
  .get(ctrlArticals.getOne)
  .put(ctrlArticals.editOne)
  .delete(ctrlArticals.deleteOne);

router
  .route('/articals/:id/comments')
  .get(ctrlComment.getAllForOne)
  .post(ctrlComment.createOne);
module.exports = router;