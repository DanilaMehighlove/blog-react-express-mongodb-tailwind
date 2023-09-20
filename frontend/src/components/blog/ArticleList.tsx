import Article from "../blog/Article";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArticles } from '../../store/features/articleSlice';

export function ArticleList() {
  const articles = useAppSelector(state => state.article.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return(
    <div className="flex flex-col flex-grow pt-6 pb-6 gap-y-6">
      { articles.map(a => <Article key={a.ID} article={a} />) }
    </div>
  );
}