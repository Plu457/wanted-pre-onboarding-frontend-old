import { Constants } from 'commons';
import { useTodoList } from 'context/TodoContext';
import Storage from 'utils/Storage';
import useMutation from '../useMutaion';

const token = Storage.getAuthToken({ name: Constants.AuthTokenName });

const fetchDeleteTodo = ({ id }) =>
  fetch(`${Constants.BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || null}`,
    },
  });

const useDeleteTodo = () => {
  const { setTodos } = useTodoList();

  const [deleteTodo] = useMutation(fetchDeleteTodo, {
    onSuccess: ({ id }) => {
      setTodos(prev => [...prev.filter(prev => prev.id !== id)]);
    },
  });

  return { deleteTodo };
};

export default useDeleteTodo;
