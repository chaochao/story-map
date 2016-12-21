var mongoose = require('mongoose');
var Artical = mongoose.model('Artical');

//get all
module.exports.getAll = function(req, res) {
    // res.send('this is get all');
    var limit = parseInt(req.query.limit) || 10
    var offset = parseInt(req.query.offset) || 0
    Artical
      .find()
      .skip(offset)
      .limit(limit)
      .exec(function(err, articals) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(articals);
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
      var newArtical = req.body;
      Artical.create(newArtical, function(err, art) {
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
  Artical
    .findById(id)
    .exec(function(err, artical) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(artical);
      }
    });
};

//edit one
module.exports.editOne = function(req, res) {
    // res.send("this is edit")
    var id = req.params.id;
    Artical
      .findByIdAndUpdate(id, req.body, {
        new: true
      }, function(err, newArtical) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(newArtical);
        }
      });


  }
  //delete one
module.exports.deleteOne = function(req, res) {
  var id = req.params.id;
  Artical
    .findByIdAndRemove(id, function(err){
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(204).send();
      }
    });
}