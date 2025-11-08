import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainNews: JSON.parse(localStorage.getItem("mainNews")) || null,
  industryNews: JSON.parse(localStorage.getItem("industryNews")) || null,
  youthNews: JSON.parse(localStorage.getItem("youthNews")) || null,
};

const lastDataSlice = createSlice({
  name: "lastData",
  initialState,
  reducers: {
    setLastItem: (state, action) => {
      const { pageName, item } = action.payload;
      state[pageName] = item;
      localStorage.setItem(pageName, JSON.stringify(item));
    },
  },
});

export const { setLastItem } = lastDataSlice.actions;
export default lastDataSlice.reducer;
