var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  author:{
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      username: String
  },
  content:{
    type: String,
    required: true
  },
  likes: Number,
  created_at: { type: Date, default: Date.now },
})

var articleSchema = new mongoose.Schema({
  author:{
     id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      username: String
  },
  title: {
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
  created_at: { type: Date, default: Date.now },
  comments:[commentSchema],
  likes: Number,
  dislikes: Number,
  tags:[String],
  location:{
    country: String,
    state: String,
    city: String,
    zip: String,
    coordinates:{
      type:[Number],
      index: '2dsphere'
    }
  }
});
mongoose.model("Article",articleSchema);
mongoose.model("Comment",commentSchema);