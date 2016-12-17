var mongoose = require('mongoose');
var Artical = mongoose.model('Artical');

//get all
module.exports.getAll = function(req, res){
  res.send('this is get all');
}
//get one 

//create one
module.exports.createOne = function(req, res){
  // res.send('this is create one');
  console.log(req.body);
  if(!req.body.title || !req.body.content){
    res.status(400).json({
      message: "please provide title and content."
    })
  } else {
    var newArtical = req.body;
    Artical.create(newArtical, function(err,art){
      if(err){
        res.status(500).json({
          message:"can not create artical"
        });
      } else {
          res.status(201).json(art);
      }
    });
  }

}
//update one

//delete one