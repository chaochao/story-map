var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.register = function(req, res) {
  if (!req.body.username || !req.body.password) {
    es.status(400).json({
      message: "please provide username and password"
    });
    return;
  }
  var newUser = req.body;
  newUser.name = req.body.username;
  newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(newUser, function(err, user) {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log(user);
      res.status(201).json({
        success: true
      });
    }
  });
}

module.exports.login = function(req, res) {
  if (!req.body.username || !req.body.password) {
    es.status(400).json({
      message: "please provide username and password"
    });
    return;
  }

  User.findOne({
      username: req.body.username
    })
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
          var token = jwt.sign({
            username: user.username
          }, 'this is secret', {
            expiresIn: 3600 * 24
          });
          res.status(200).json({success: true, token: token});

        } else {
          res.status(401).json({
            success: false,
            message: "No such user&password combination"
          });
        }
      }
    });
}