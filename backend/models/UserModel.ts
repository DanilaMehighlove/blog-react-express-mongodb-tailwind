import { Schema, model } from "mongoose";
import { DefaultModel } from "./_DefaultModel";

const userSchema = new Schema({
  login: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
});

export class UserModel extends DefaultModel<{ login: string, password: string }> {
  constructor() {
    super(model('User', userSchema));
  }
}