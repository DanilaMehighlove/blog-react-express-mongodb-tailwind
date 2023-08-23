import Article from "../blog/Article";
import { Article as ArticleClass } from "../../models/article";

const test = new ArticleClass({ID: 1, title: 'Сухарики', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde quam saepe et fugiat ipsam voluptate sapiente dolor iusto maiores quidem perspiciatis eveniet dolore delectus, natus ex aliquid, error ipsum! Nam modi rem praesentium earum unde aut quasi soluta maxime necessitatibus rerum dicta, quia, fugit veniam quas. Molestias, earum non?'});

export function Main() {
  return(
    <div className="flex flex-col pt-6 pb-6 gap-y-6">
      <Article article={test} />
      <Article article={test} />
      <Article article={test} />
      <Article article={test} />
      <Article article={test} />
    </div>
  );
}