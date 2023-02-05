import { useEffect, useState } from 'react';
import { useTodos } from 'utils/hooks';
import TodoView from 'views/TodoView';

const Home = () => {
  const { data } = useTodos();

  const [todoList, setTodoList] = useState([]);

  console.log('data: >>', data);

  //TODO: useTodos()에서 가져온 데이터를 그대로 사용할지 todoList라는 상태를 생성한 뒤 거기서 상태를 관리할 지 고민
  //TODO: useFetch()에서 useEffect를 제거할 지 고민
  useEffect(() => {
    setTodoList(data);
  }, [data]);

  return <TodoView todoList={todoList} />;
};

export default Home;
