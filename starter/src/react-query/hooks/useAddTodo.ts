import { useQueryClient, useMutation } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "../constants";
import { Todo, todoService } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

export const useAddTodo = (onAdd?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
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
