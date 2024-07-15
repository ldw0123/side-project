interface CreateTodoProps {
  newTodo: string;
  writeTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>; // setState를 props로 넘길 때 사용하는 타입
}

export default function CreateTodo({
  newTodo,
  writeTodo,
  setNewTodo,
}: CreateTodoProps) {
  return (
    <>
      {/* input & submit */}
      <form onSubmit={writeTodo} className="absolute bottom-1.5">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-[430px] h-8 ml-2 mr-2 mb-1 pl-2 bg-white rounded-xl"
          placeholder="write your plan here!"
        />
        <button type="submit" className="w-[45px] h-8 bg-white rounded-xl">
          작성
        </button>
      </form>
    </>
  );
}
