// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    bgColor: "white",
  },
  reducers: {
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  }
});

export const {
  setBgColor
} = layoutSlice.actions;

export default layoutSlice.reducer;
