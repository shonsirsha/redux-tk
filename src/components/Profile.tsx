import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const Profile: FC = () => {
  const user = useSelector((state: RootState) => state.user.userDetail);
  const newestTodo = useSelector(
    (state: RootState) => state.todo.todos.length > 0 && state.todo.todos[0]
  );
  return (
    <div className="profile">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2>Newest Todo:</h2>
      <p>{newestTodo ? newestTodo.content : "No todo yet"}</p>

      <kbd> Component 1 (Profile.tsx)</kbd>
    </div>
  );
};

export default Profile;
