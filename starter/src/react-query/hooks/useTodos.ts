import { useQuery } from "@tanstack/react-query";
import { Todo, todoService } from "../services/todoService";
import { CACHE_KEY_TODOS } from "../constants";

export const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryFn: todoService.getAll,
    queryKey: [CACHE_KEY_TODOS],
  });
};
