import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../models/article';
import { getArticles as fetchArticles } from '../../utils/requests';

interface IInitialState {
  list: Article[];
}

const initialState: IInitialState = {
  list: []
};

export const getArticles = createAsyncThunk('getArticles', async () => {
  try {
    const response = await fetchArticles();
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    initArticles: (state, action) => {

    },
    addArticle: (state, action: PayloadAction<Article>) => {
      state.list.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export const { initArticles, addArticle } = articleSlice.actions;
export default articleSlice.reducer;

