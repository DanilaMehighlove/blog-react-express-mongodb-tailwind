import { Routes, Route } from "react-router-dom";
import { ArticleList } from '../blog/ArticleList';
import { Login, Signin } from '../authorization';
import { ArticleForm } from "../blog/ArticleForm";

export function Main() {

  return(
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article" element={<ArticleForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}