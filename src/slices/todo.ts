import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Todos } from "../types";
const initialState: Todos = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
