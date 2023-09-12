import { Request, Response } from "express"
import { User } from '../models/User';

const userModel = new User();

const UserController = {
  get: async (req: Request, res: Response) => {
    try {
      const users = await userModel.find();
      res.send(users);
    } catch(error) {
      console.log(error);
    }
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },
  post: async (req: Request, res: Response) => {
    try {
      const result = await userModel.create(req.body);
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  },
  put: async (req: Request, res: Response) => {
    console.log('put')
    try {
      const result = await userModel.update(req.params.id, req.body);
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const user = await userModel.delete(req.params.id);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },
}

export { UserController }; 