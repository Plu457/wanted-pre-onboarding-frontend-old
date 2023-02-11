import { Constants } from 'commons';
import { useTodoList } from 'context/TodoContext';
import Storage from 'utils/Storage';
import useMutaion from '../useMutaion';

const token = Storage.getAuthToken({ name: Constants.AuthTokenName });

const fetchUpdateTodo = ({ id, todo, isCompleted }) =>
  fetch(`${Constants.BASE_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ todo, isCompleted }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || null}`,
    },
  });

const useUpdateTodo = () => {
  const { setTodos } = useTodoList();

  const [updateTodo] = useMutaion(fetchUpdateTodo, {
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
