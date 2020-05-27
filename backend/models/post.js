const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  ownership: { type: String, required: true },
  faculty: { type: String, required: true },
  establish:{type:String,required:true}
});

module.exports = mongoose.model('Post', postSchema);
