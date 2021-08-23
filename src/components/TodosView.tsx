import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteTodo, toggleTodoStatus } from "../slices/todo";
const TodosView: FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };
  return (
    <div className="todosView">
      <h1>My Todos (All):</h1>
      {todos.length === 0 && <p>No todos yet</p>}
      {todos.map((todo, ix) => (
        <div className="flex" key={todo.id}>
          <p
            className={`${todo.completed && `done`}`}
            onClick={() => dispatch(toggleTodoStatus(todo.id))}
          >
            {ix + 1}. {todo.content}
          </p>

          <button className="del" onClick={() => handleDeleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
      <kbd> Component 2 (TodosView.tsx)</kbd>
    </div>
  );
};

export default TodosView;
