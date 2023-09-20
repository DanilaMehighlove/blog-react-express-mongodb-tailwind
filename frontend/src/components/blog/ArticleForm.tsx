import { addArticle } from "../../store/features/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleMongoErrors } from "../../utils/handleErrors";
import { isUserExistByID, createArticle } from "../../utils/requests";
import { Button, Error, Input, Textarea } from "../form-elements";
import { useState, MouseEvent, ChangeEvent } from 'react';
import { Article } from '../../models/article';

export function ArticleForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [articleErrors, setArticleErrors] = useState<string[]>([]);
  const [created, setCreated] = useState(false);
  const userID = useAppSelector(state => state.user.ID);
  const dispatch = useAppDispatch();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (articleErrors.length) setArticleErrors([]);
    if (created) setCreated(false);
  }

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (articleErrors.length) setArticleErrors([]);
    if (created) setCreated(false);
  }

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    let errors: string[] = [];
    event.preventDefault();

    if (!title) {
      errors = [...errors, 'The title cannot be empty'];
      setArticleErrors([...errors]);
    }

    if (!text) {
      errors = [...errors, 'The article text cannot be empty'];
      setArticleErrors([...errors]);
    }

    if (!userID || errors.length) return;

    const response = await isUserExistByID(userID);
    const data = await response.json();

    errors = [...errors, ...handleMongoErrors(data)];

    if (errors.length) return setArticleErrors([...errors]); 

    const articleResponse = await createArticle(title, text);
    const articleResponseData = await articleResponse.json();
    errors = [...errors, ...handleMongoErrors(articleResponseData)];

    if (errors.length) return setArticleErrors([...errors]); 

    const article = new Article(articleResponseData);
    dispatch(addArticle(article));
    setCreated(true);
  }

  return(
    <form className="flex w-full h-full flex-col gap-y-4 pt-4 pb-4">
      <div className="w-full flex flex-col">
        <h4>Title</h4>
        <Input onChange={handleTitleChange} />
      </div>
      <div className="w-full flex flex-col">
        <h4>Text</h4>
        <Textarea onChange={handleTextChange} />
      </div>
      <div className="self-start">
        <Button text="Create" onClick={handleClick} />
      </div>
      <Error errors={articleErrors} />
      { created ? <p>The article was successfully created</p> : null }
    </form>
  );
}