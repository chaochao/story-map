var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Article = mongoose.model('Article');

function addComment(req, res, article){
  // auther info can get from req
  article.comments.push({
    author:{
      id: req.body.id,
      username:req.body.username
    },
    content: req.body.content
  })
  article.save(function(err,articleUpdated){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200)
      .json(articleUpdated.comments[articleUpdated.comments.length-1]);
    }
  });
}

module.exports.getAllForOne = function(req, res){
  var articleId = req.params.id;
  Article
    .findById(articleId)
    .select('comments')
    .then(function(article){
      res.status(200).json(article.comments);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports.createOne = function(req, res){
  var articleId = req.params.id;
  Article
    .findById(articleId)
    .then(function(article){
      addComment(req,res, article);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });

}