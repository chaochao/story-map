var mongoose = require('mongoose');
var Article = mongoose.model('Article');

//get all
module.exports.getAll = function(req, res) {
    // res.send('this is get all');
    var limit = parseInt(req.query.limit) || 10
    var offset = parseInt(req.query.offset) || 0
    Article
      .find()
      .sort({
        'created_at':'asc'
      })
      .skip(offset)
      .limit(limit)
      .exec(function(err, articles) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(articles);
        }
      });

  }
  //get one 

//create one
module.exports.createOne = function(req, res) {
    console.log(req.body);
    if (!req.body.title || !req.body.content) {
      res.status(400).json({
        message: "please provide title and content."
      })
    } else {
      var newArticle = req.body;
      Article.create(newArticle, function(err, art) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(201).json(art);
        }
      });
    }

  }
  //get one
module.exports.getOne = function(req, res) {
  console.log(req.params);
  console.log(req.query);
  var id = req.params.id;
  Article
    .findById(id)
    .exec(function(err, article) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(article);
      }
    });
};

//edit one
module.exports.editOne = function(req, res) {
    // res.send("this is edit")
    var id = req.params.id;
    Article
      .findByIdAndUpdate(id, req.body, {
        new: true
      }, function(err, newArticle) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(newArticle);
        }
      });


  }
  //delete one
module.exports.deleteOne = function(req, res) {
  var id = req.params.id;
  Article
    .findByIdAndRemove(id, function(err){
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(204).send();
      }
    });
}