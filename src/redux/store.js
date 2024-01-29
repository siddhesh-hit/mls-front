import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import LanguageReducer from "./reducers/LanguageReducer";

export const store = configureStore({
  reducer: {
    UserReducer,
    LanguageReducer,
  },
});
