import { Router } from "express";
import { DefaultController } from "../controllers/_DefaultController";

export class DefaultRoutes {
  protected router = Router();
  protected controller: DefaultController;

  constructor(controller: DefaultController) {
    this.controller = controller;
    this.router.get('/', this.controller.get);

    this.router.get('/:id', this.controller.getOne);

    this.router.post('/', this.controller.post);

    this.router.put('/:id', this.controller.put);

    this.router.delete('/:id', this.controller.delete);
  }

  getRouter() {
    return this.router;
  }
}