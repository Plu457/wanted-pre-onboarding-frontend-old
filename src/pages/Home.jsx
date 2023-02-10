import { useTodoList } from 'context/TodoContext';
import { useEffect } from 'react';
import { useCreateTodo, useDeleteTodo, useGetTodos } from 'utils/hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { todos, setTodos } = useTodoList();

  const { data: getTodos } = useGetTodos();
  const { createTodo } = useCreateTodo();
  const { deleteTodo } = useDeleteTodo();

  const onSubmitTodo = value => e => {
    e.preventDefault();
    if (!value) return;

    createTodo({ todo: value });
  };

  const onDeleteTodo = id => deleteTodo(id);
  useEffect(() => {
    setTodos(getTodos);
  }, [getTodos]);

  if (!todos) return null;

  return <TodoView todoList={todos} onSubmitTodo={onSubmitTodo} onDeleteTodo={onDeleteTodo} />;
};

export default Home;
