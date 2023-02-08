import { useGetTodos } from 'utils/hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { data } = useGetTodos();

  return <TodoView />;
};

export default Home;
