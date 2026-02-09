// Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
