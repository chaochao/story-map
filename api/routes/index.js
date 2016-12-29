var express = require('express');
var router = express.Router({
  mergeParams: true
});

var ctrlUsers = require('../controllers/users.controller.js');
var ctrlArticles = require('../controllers/articles.controller.js');
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
  .route('/articles')
  .get(ctrlArticles.getAll);

router
  .route('/articles/new')
  .post(ctrlArticles.createOne);  

router
  .route('/articles/:id')
  .get(ctrlArticles.getOne)
  .put(ctrlArticles.editOne)
  .delete(ctrlArticles.deleteOne);

router
  .route('/articles/:id/comments')
  .get(ctrlComment.getAllForOne)
  .post(ctrlComment.createOne);
router
  .route('/articles/:id/comments/:commentId')
  .delete(ctrlComment.deleteOne);
module.exports = router;