import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  option: 'Option A',
  note: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOption(state, action) {
      state.option = action.payload;
    },
    setNote(state, action) {
      state.note = action.payload;
    }
  }
});

export const { setOption, setNote } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer
});

export default store;