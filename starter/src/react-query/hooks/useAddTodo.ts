import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}

export const useAddTodo = (onAdd?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => {
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data);
    },
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>([CACHE_KEY_TODOS]) || [];

      queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd?.();

      return {
        previousTodos,
      };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(
        [CACHE_KEY_TODOS],
        context.previousTodos
      );
    },
    mutationKey: [CACHE_KEY_TODOS],
  });
};

// Approach: invalidate the cache, it will bring everything again
/*queryClient.invalidateQueries({
    queryKey: [CACHE_KEY_TODOS],
});*/

//Approach 2: updating the data in the cache
/*
queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) => [
    savedTodo,
    ...(todos || []),
]);
if (ref.current) ref.current.value = "";
*/

//Approach 3: with uptimistic updates
/*
queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) =>
    todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
);
*/
