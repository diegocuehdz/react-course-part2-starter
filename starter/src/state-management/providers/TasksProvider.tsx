import { ReactNode, useReducer } from "react";
import { TasksContext } from "../context/tasksContext";
import { tasksReducer } from "../reducers/tasksReducer";

interface ITasksProviderProps {
  children: ReactNode;
}

const TasksProvider = ({ children }: ITasksProviderProps) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
