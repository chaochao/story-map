var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Artical = mongoose.model('Artical');

function addComment(req, res, artical){
  // auther info can get from req
  artical.comments.push({
    author:{
      id: req.body.id,
      username:req.body.username
    },
    content: req.body.content
  })
  artical.save(function(err,articalUpdated){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200)
      .json(articalUpdated.comments[articalUpdated.comments.length-1]);
    }
  });
}

module.exports.getAllForOne = function(req, res){
  var articalId = req.params.id;
  Artical
    .findById(articalId)
    .select('comments')
    .then(function(artical){
      res.status(200).json(artical.comments);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports.createOne = function(req, res){
  var articalId = req.params.id;
  Artical
    .findById(articalId)
    .then(function(artical){
      addComment(req,res, artical);
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });

}