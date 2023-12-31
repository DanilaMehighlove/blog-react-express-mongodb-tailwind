import { ArticleModel } from '../models/ArticleModel';
import { DefaultController } from "./_DefaultController";

export class ArticleController extends DefaultController<ArticleModel> {
  constructor() {
    super(new ArticleModel());
  }
}