const TodoItem = ({ item }) => {
  return (
    <li className="flex items-center py-2 gap-2">
      <span className="w-full pl-2">{item.todo}</span>
      <button
        type="button"
        className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm hover:bg-gray-200"
      >
        수정
      </button>
      <button type="button" className="w-16 bg-gray-100 rounded-md text-gray-500 text-sm">
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
