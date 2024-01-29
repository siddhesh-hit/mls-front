import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  languange: "marathi",
};
export const LanguageInfo = createSlice({
  name: "LanguageInfo",
  initialState: initialState,
  reducers: {
    setLanguageDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguageDetails } = LanguageInfo.actions;

export default LanguageInfo.reducer;
