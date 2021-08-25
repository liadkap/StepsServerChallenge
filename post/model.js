import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  user: String
});

export default mongoose.model('Post', PostSchema);