import Article from "../blog/Article";
import { Article as ArticleClass } from "../../models/article";
import { useEffect, useState } from "react";

export function ArticleList() {
  const [articles, setArticles] = useState<ArticleClass[]>([]);

  useEffect(() => {
    fetch('http://localhost:3030/article')
    .then(response => response.json())
    .then(data => setArticles(data.map((a: any) => new ArticleClass(a))));
  }, []);

  return(
    <div className="flex flex-col flex-grow pt-6 pb-6 gap-y-6">
      { articles.map(a => <Article key={a.ID} article={a} />) }
    </div>
  );
}