import { useEffect, useState } from 'react';
import { useTodos } from 'utils/hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { data } = useTodos();

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  return <TodoView todoList={todoList} />;
};

export default Home;
