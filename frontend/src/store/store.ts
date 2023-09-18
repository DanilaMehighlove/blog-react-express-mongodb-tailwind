import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import articleReducer from './features/articleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;