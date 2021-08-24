import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todo";
const TodoCreator: FC = () => {
  const dispatch = useDispatch();
  const handleCreateTodo = (todoText: string) => {
    if (textAreaRef.current && textAreaRef.current.value) {
      dispatch(addTodo(todoText));
      textAreaRef.current.value = "";
    }
  };
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="todoCreator">
      <h1>Create a new todo</h1>
      <textarea ref={textAreaRef} placeholder="Todo detail..." />
      <button
        onClick={() =>
          handleCreateTodo(
            textAreaRef.current ? textAreaRef.current?.value : ""
          )
        }
      >
        Create todo
      </button>
      <kbd>Component 1 (TodoCreator.tsx)</kbd>
    </div>
  );
};

export default TodoCreator;
