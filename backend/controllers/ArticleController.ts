import { ArticleModel } from '../models/ArticleModel';
import { DefaultController } from "./_DefaultController";

export class ArticleController extends DefaultController {
  constructor() {
    super(new ArticleModel());
  }
}