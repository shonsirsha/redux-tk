import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import themeReducer from "./slices/theme";
import todoReducer from "./slices/todo";
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
