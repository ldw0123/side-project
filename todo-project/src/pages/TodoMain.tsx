import { useState } from 'react';
import { TodoType } from '../types/TodoType';
import Header from '../components/Header/Header';
import TodoList from '../components/Todo/TodoList';
import CreateTodo from '../components/Todo/CreateTodo';

export default function TodoMain() {
  const [todo, setTodo] = useState<TodoType[]>([
    {
      id: 1,
      text: '양치질하기',
      checked: false,
      state: 'notstart',
    },
    {
      id: 2,
      text: '세수하기',
      checked: true,
      state: 'notstart',
    },
    {
      id: 3,
      text: '기지개켜기',
      checked: false,
      state: 'done',
    },
  ]);

  const [newTodo, setNewTodo] = useState(''); // todo 내용

  // todo 등록
  const writeTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 새로운 todo 객체 생성
    const newTodoItem: TodoType = {
      id: todo.length + 1,
      text: newTodo,
      checked: false,
      state: 'notstart',
    };

    setTodo([...todo, newTodoItem]); // 기존 todo 배열에 새로운 todo 객체 추가

    setNewTodo(''); // 입력창 초기화
  };

  // todo 수정
  // id, newText를 받아와서 해당 id를 가진 todo 항목의 text를 newText로 업데이트
  const updateTodo = (id: number, newText: string) => {
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  // todo 삭제
  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  // todo 토글
  const updateTodoState = (id: number, newState: string) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, state: newState } : todo
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-[500px] h-[700px] top-[10px] relative bg-lightBlue rounded-xl shadow-2xl">
        <Header />
        <TodoList
          initialTodo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          updateTodoState={updateTodoState}
        />
        <CreateTodo
          newTodo={newTodo}
          writeTodo={writeTodo}
          setNewTodo={setNewTodo}
        />
      </div>
    </div>
  );
}
