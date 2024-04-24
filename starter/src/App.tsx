import { useReducer } from "react";
import "./App.css";
import { tasksReducer } from "./state-management/reducers/tasksReducer";

import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TasksContext } from "./state-management/context/tasksContext";
import { loginStatusReducer } from "./state-management/reducers/loginStatusReducer";
import { AuthContext } from "./state-management/context/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(loginStatusReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage></HomePage>
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
