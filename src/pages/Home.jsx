import { useTodoList } from 'context/TodoContext';
import { useEffect } from 'react';
import { useCreateTodo, useDeleteTodo, useGetTodos, useUpdateTodo } from 'hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { todos, setTodos } = useTodoList();

  const { data: getTodos } = useGetTodos();
  const { createTodo } = useCreateTodo();
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();

  useEffect(() => {
    setTodos(getTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTodos]);

  if (!todos) return null;

  const onSubmitTodo = todo => e => {
    e.preventDefault();
    if (!todo) return;

    createTodo({ todo });
  };

  const onDeleteTodo = id => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodo({ id });
    }
  };

  const onUpdateTodo = ({ id, todo, isCompleted }) => {
    const updatedTodoContent = window.prompt('오늘 할 일을 수정하세요.', todo);
    updateTodo({ id, todo: updatedTodoContent, isCompleted });
  };

  return (
    <TodoView
      todoList={todos}
      onSubmitTodo={onSubmitTodo}
      onDeleteTodo={onDeleteTodo}
      onUpdateTodo={onUpdateTodo}
    />
  );
};

export default Home;
