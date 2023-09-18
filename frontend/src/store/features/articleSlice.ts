import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../../models/article';

interface IInitialState {
  list: Article[];
}

const initialState: IInitialState = {
  list: []
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    initArticles: (state, action) => {

    },
    addArticle: (state, action) => {

    }
  }
});

export const { initArticles, addArticle } = articleSlice.actions;
export default articleSlice.reducer;

