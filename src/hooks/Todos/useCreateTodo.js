import { useTodoList } from 'context/TodoContext';
import { Fetch } from 'utils';
import useMutaion from '../useMutaion';

const useCreateTodo = () => {
  const { setTodos } = useTodoList();

  const [createTodo] = useMutaion(Fetch.createTodo, {
    onSuccess: res => {
      setTodos(prev => [...prev, res]);
    },
  });

  return { createTodo };
};

export default useCreateTodo;
