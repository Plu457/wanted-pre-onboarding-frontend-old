import Input from 'components/Input';
import ItemList from './ItemList';

const TodoView = ({ todoList }) => {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-100">
      <div className="w-[540px] p-8 bg-white rounded-lg">
        <header className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">TODO LIST</h2>
          <span>총 {todoList?.length}개</span>
        </header>
        <form>
          <div className="flex gap-3 mb-3">
            <Input className="px-3 mb-0 rounded-md" />
            <button className="w-20 py-2 text-white bg-green-700 rounded-md">확인</button>
          </div>
        </form>
        <ul className="flex flex-col">
          {todoList?.map(item => (
            <ItemList item={item} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default TodoView;
