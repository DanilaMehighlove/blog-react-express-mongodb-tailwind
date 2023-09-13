import { UserModel } from '../models/UserModel';
import { DefaultController } from "./DefaultController";

export class UserController extends DefaultController {
  constructor() {
    super(new UserModel());
  }
}