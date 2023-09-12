import { Schema } from 'mongoose';

const article = new Schema({
  title: String,
  text: String
});

export { article };