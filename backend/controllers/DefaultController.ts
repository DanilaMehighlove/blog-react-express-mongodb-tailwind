import { Request, Response } from "express";
import { DefaultModel } from "../models/DefaultModel";

export class DefaultController {
  protected model: DefaultModel<any>;

  constructor(model: DefaultModel<any>) {
    this.model = model;
  }

  async get (req: Request, res: Response) {
    try {
      const data = await this.model.find();
      res.send(data);
    } catch(error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async getOne (req: Request, res: Response) {
    try {
      const data = await this.model.findById(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async post (req: Request, res: Response) {
    try {
      const data = await this.model.create(req.body);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async put (req: Request, res: Response) {
    try {
      const data = await this.model.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async delete (req: Request, res: Response) {
    try {
      const data = await this.model.delete(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
}