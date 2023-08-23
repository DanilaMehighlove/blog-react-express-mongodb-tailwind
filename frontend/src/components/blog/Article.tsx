import { Article as ArticleClass } from "../../models/article";

interface IArticleProps {
  article: ArticleClass
}

export default function Article({article}: IArticleProps) {

  return(
    <section className="bg-sky-50 p-4">
      <h2>{article.title}</h2>
      <p>{article.text}</p>
    </section>
  );
}