import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  ID?: string | null;
}

const initialState: IInitialState = { };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUserID: (state) => {
      const ID = localStorage.getItem('userID');
      state.ID = ID;
    },
    setUserID: (state, action: PayloadAction<string>) => {
      state.ID = action.payload;
      localStorage.setItem('userID', action.payload);
    },
    removerUserID: (state) => {
      delete state.ID;
      localStorage.removeItem('userID');
    }
  }
});

export const { setUserID, removerUserID, initUserID } = userSlice.actions;
export default userSlice.reducer;