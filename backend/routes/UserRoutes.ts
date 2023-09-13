import { UserController } from '../controllers/UserController';
import { DefaultRoutes } from './_DefaultRoutes';

export class UserRoutes extends DefaultRoutes {
  constructor() {
    super(new UserController());
  }
}