import { UserModel } from '../models/UserModel';
import { DefaultController } from "./_DefaultController";

export class UserController extends DefaultController {
  constructor() {
    super(new UserModel());
  }
}