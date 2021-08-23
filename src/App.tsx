import TodosView from "./components/TodosView";
import TodoCreator from "./components/TodoCreator";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  return (
    <div className="App">
      <div className="flex">
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
