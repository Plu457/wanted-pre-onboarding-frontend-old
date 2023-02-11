import { useTodoList } from 'context/TodoContext';
import { Fetch } from 'utils';
import useMutation from '../useMutaion';

const useDeleteTodo = () => {
  const { setTodos } = useTodoList();

  const [deleteTodo] = useMutation(Fetch.deleteTodo, {
    onSuccess: ({ id }) => {
      setTodos(prev => [...prev.filter(prev => prev.id !== id)]);
    },
  });

  return { deleteTodo };
};

export default useDeleteTodo;
