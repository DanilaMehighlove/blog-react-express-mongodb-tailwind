import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IArticle {
  id: string;
  text: string;
}

interface IInitialState {
  list: IArticle[];
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

