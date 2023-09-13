import { Schema, model } from "mongoose";
import { DefaultModel } from "./DefaultModel";

const articleSchema = new Schema({
  title: {
    required: true,
    unique: true,
    type: String
  },
  text: {
    required: true,
    type: String
  }
});

export class ArticleModel extends DefaultModel<{ title: string, text: string }> {
  constructor() {
    super(model('Article', articleSchema));
  }
}