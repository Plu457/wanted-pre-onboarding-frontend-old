import useMutaion from '../useMutaion';

const useCreateTodos = setTodos => {
  const [createTodos] = useMutaion({
    url: '/todos',
    method: 'POST',
    onSuccess: res => {
      setTodos(prev => [...prev, res]);
    },
  });

  return { createTodos };
};

export default useCreateTodos;
