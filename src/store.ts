import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
