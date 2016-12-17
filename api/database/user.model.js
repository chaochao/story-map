var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  name: String,
  password: {
    type: String,
    required: true
  },
  description: String,
  Follows:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  Followers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  avatar: String,
  location: {
    address: String,
    coordinates:{
      type:[Number],
      index: '2dsphere'
    }
  }
});

mongoose.model('User',userSchema);