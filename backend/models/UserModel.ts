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


interface props { login: string; password: string; };
export class UserModel extends DefaultModel<props> {
  constructor() {
    super(model('User', userSchema));
  }

  isExist(props: props) {
    if (!props.login || !props.password) throw new Error();
    return this.model.findOne(props);
  }
}