var mongoose = require('mongoose');

var articalSchema = mongoose.Schema({
  author:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
  tags:[String],
  location:{
    contry: String,
    state: String,
    city: String,
    zip: String,
    coordinates:{
      type:[Number],
      index: '2dsphere'
    }
  }
});
mongoose.model("Artical",articalSchema);
