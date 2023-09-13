import { Request, Response } from "express";
import { DefaultModel } from "../models/_DefaultModel";

export class DefaultController {
  protected model: DefaultModel<any>;

  constructor(model: DefaultModel<any>) {
    this.model = model;
  }

  get = async (req: Request, res: Response) => {
    try {
      const data = await this.model.find();
      res.send(data);
    } catch(error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  getOne = async (req: Request, res: Response) => {
    try {
      const data = await this.model.findById(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  post = async (req: Request, res: Response) => {
    try {
      const data = await this.model.create(req.body);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  put = async (req: Request, res: Response) => {
    try {
      const data = await this.model.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const data = await this.model.delete(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
}