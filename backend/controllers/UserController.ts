import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import { DefaultController } from "./_DefaultController";

export class UserController extends DefaultController<UserModel> {
  constructor() {
    super(new UserModel());
  }

  isExist = async (req: Request, res: Response) => {
    try {
      const reqParams = {
        login: req.params.login,
        password: req.params.password
      }

      const data = await this.model.isExist(reqParams);
      res.send(data ?? { notFound: true });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
}