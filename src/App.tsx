import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import TodosView from "./components/TodosView";
import TodoCreator from "./components/TodoCreator";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const darkTheme = useSelector((state: RootState) => state.theme.darkTheme);

  return (
    <div className={`App ${darkTheme && `dark`}`}>
      <div className="flex">
        <Profile />
        <ProfileSettings />
      </div>
      <div className="flex margin">
        <TodosView />
        <TodoCreator />
      </div>

      <p>
        States (todos, user detail, & theme) are shared & managed globally
        between: Parent component, Component 1, 2, 3, & 4 using redux-toolkit.
      </p>
      <kbd>Parent Component (App.tsx)</kbd>
    </div>
  );
}

export default App;
