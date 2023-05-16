import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heartItems: [],
  totalCount: 0,
};

export const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    addItemToHeart: (state, action) => {
      state.heartItems.push({ ...action.payload, heart: true });
      state.totalCount = state.heartItems.length;
    },
    deleteItemFromHeart: (state, action) => {
      state.heartItems = state.heartItems.filter((el) => el.title !== action.payload);
      state.totalCount = state.heartItems.length;
    },
  },
});

export const { addItemToHeart, deleteItemFromHeart } = heartSlice.actions;

export default heartSlice.reducer;
