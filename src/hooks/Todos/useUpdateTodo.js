import { useTodoList } from 'context/TodoContext';
import { Fetch } from 'utils';
import useMutaion from '../useMutaion';

const useUpdateTodo = () => {
  const { setTodos } = useTodoList();

  const [updateTodo] = useMutaion(Fetch.updateTodo, {
    onSuccess: res => {
      setTodos(prev => {
        return prev.map(todo => {
          if (todo.id === res.id) return res;

          return todo;
        });
      });
    },
  });

  return { updateTodo };
};

export default useUpdateTodo;
