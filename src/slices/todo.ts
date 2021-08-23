import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Todos } from "../types";
const initialState: Todos = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        { id: Date.now(), content: action.payload, completed: false },
      ];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    finishTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, finishTodo } = todoSlice.actions;

export default todoSlice.reducer;
