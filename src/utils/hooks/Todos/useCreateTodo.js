import { Constants } from 'commons';
import { useTodoList } from 'context/TodoContext';
import Storage from 'utils/Storage';
import useMutaion from '../useMutaion';

const token = Storage.getAuthToken({ name: Constants.AuthTokenName });

const fetchCreateTodo = ({ todo }) =>
  fetch(`${Constants.BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({ todo }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || null}`,
    },
  });

const useCreateTodo = () => {
  const { setTodos } = useTodoList();

  const [createTodo] = useMutaion(fetchCreateTodo, {
    onSuccess: res => {
      setTodos(prev => [...prev, res]);
    },
  });

  return { createTodo };
};

export default useCreateTodo;
