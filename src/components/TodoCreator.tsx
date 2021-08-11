import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todo";
import { Todo } from "../types";
const TodoCreator: FC = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<Todo>({ id: 0, content: "" });
  const handleCreateTodo = (todo: Todo) => {
    if (todo.content !== "") dispatch(addTodo(todo));
  };
  return (
    <div className="todoCreator">
      <h1>Create a new todo</h1>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setTodo({ id: Date.now(), content: e.target.value });
        }}
        placeholder="Todo detail..."
        value={todo.content}
      />
      <button
        onClick={() => {
          handleCreateTodo(todo);
          setTodo({ id: 0, content: "" });
        }}
      >
        Create todo
      </button>
      <kbd> Component 4 (TodosCreator.tsx)</kbd>
    </div>
  );
};

export default TodoCreator;
