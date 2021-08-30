import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const RuntimeSchema = new Schema({
  name: String,
  time: Number,
});

export default mongoose.model('Runtime', RuntimeSchema);