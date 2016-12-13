require('./api/database/db.js');

var express = require('express');
var routes = require('./api/routes');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.set('port',process.env.PORT || 3000)
app.use(bodyParser.urlencoded({extended: false}));

//for dev only
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// make sure use index.html in public is used
app.use(express.static(path.join(__dirname, 'public')));

//Set node_module path, refer in the angular code
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

//api
app.use('/api', routes);

app.listen(app.get('port'), process.env.IP, function(){
  console.log("it's on port", app.get('port'));
});