import "./App.css";
import Counter from "./state-management/Counter";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/providers/AuthProvider";
import TasksProvider from "./state-management/providers/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage></HomePage>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
