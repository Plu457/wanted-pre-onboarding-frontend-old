import { useTodoList } from 'context/TodoContext';
import { useEffect } from 'react';
import { useCreateTodos, useGetTodos } from 'utils/hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { todos, setTodos } = useTodoList();

  const { data: getTodos } = useGetTodos();
  const { createTodos } = useCreateTodos(setTodos);

  const onSubmitTodo = value => e => {
    e.preventDefault();
    if (!value) return;

    createTodos({ todo: value });
  };

  useEffect(() => {
    setTodos(getTodos);
  }, [getTodos]);

  if (!todos) return null;
  console.log(todos);

  return <TodoView todoList={todos} onSubmitTodo={onSubmitTodo} />;
};

export default Home;
