import { UserController } from '../controllers/UserController';
import { DefaultRoutes } from './_DefaultRoutes';

export class UserRoutes extends DefaultRoutes<UserController> {
  constructor() {
    super(new UserController());

    this.router.get('/isexist/:login/:password', this.controller.isExist);
  }
}