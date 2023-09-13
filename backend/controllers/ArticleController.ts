import { ArticleModel } from '../models/ArticleModel';
import { DefaultController } from "./DefaultController";

export class ArticleController extends DefaultController {
  constructor() {
    super(new ArticleModel());
  }
}