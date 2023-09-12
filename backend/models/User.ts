import { Model, Schema, model } from "mongoose";
import { DefaultModel } from "./DefaultModel";

const userSchema = new Schema({
  login: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
});

type SchemeType = { login: string, password: string };
const userModel: Model<SchemeType> = model('User', userSchema);

export class User extends DefaultModel<SchemeType> {
  constructor() {
    super(userModel);
  }
}