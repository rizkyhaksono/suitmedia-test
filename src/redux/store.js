import { configureStore } from "@reduxjs/toolkit";
import ideasReducer from "./ideasSlice";

const store = configureStore({
  reducer: {
    ideas: ideasReducer,
  },
});

export default store;
