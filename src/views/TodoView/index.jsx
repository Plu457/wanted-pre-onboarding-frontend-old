import { useRef } from 'react';
import Input from 'components/Input';
import TodoItem from './TodoItem';

const TodoView = ({ todoList, onSubmitTodo, onDeleteTodo, onUpdateTodo, onCompleted }) => {
  const inputRef = useRef(null);

  return (
    <div className="w-[540px] max-h-[70vh] p-8 bg-white rounded-lg">
      <header className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">TODO LIST</h2>
        <span>총 {todoList?.length}개</span>
      </header>
      <form onSubmit={e => onSubmitTodo(inputRef.current.value)(e)}>
        <div className="flex gap-3 mb-3">
          <Input elRef={inputRef} className="px-3 mb-0 rounded-md" />
          <button className="w-20 py-2 text-white bg-green-700 rounded-md">확인</button>
        </div>
      </form>
      <div className="w-full max-h-[50vh] overflow-auto">
        <ul className="flex flex-col">
          {todoList?.map(item => (
            <TodoItem
              key={item.id}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodo={onUpdateTodo}
              onCompleted={onCompleted}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoView;
