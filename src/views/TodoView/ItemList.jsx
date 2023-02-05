const ItemList = () => {
  return (
    <li class="flex items-center py-2 gap-2">
      <span class="w-full pl-2">아이템</span>
      <button
        type="button"
        class="w-16 bg-gray-100 rounded-md text-gray-500 text-sm hover:bg-gray-200"
      >
        수정
      </button>
      <button type="button" class="w-16 bg-gray-100 rounded-md text-gray-500 text-sm">
        삭제
      </button>
    </li>
  );
};

export default ItemList;
