import { createContext, useContext, useMemo, useState } from 'react';

const TodoContext = createContext(null);

export const useTodoList = () => useContext(TodoContext);

export const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const state = useMemo(() => ({ todos, setTodos }), [todos]);

  return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};
