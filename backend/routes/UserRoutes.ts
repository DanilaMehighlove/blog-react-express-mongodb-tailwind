import { UserController } from '../controllers/UserController';
import { DefaultRoutes } from './DefaultRoutes';

export class UserRoutes extends DefaultRoutes {
  constructor() {
    super(new UserController());
  }
}