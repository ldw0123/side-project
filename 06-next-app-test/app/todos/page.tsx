'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTodos, Todo } from '@/api/service/todo/todoApi';

export default function TodosPage() {
  const [todo, setTodo] = useState<Todo[]>([]);

  // useEffect(() => {
  //   getTodos();
  // }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos(); // await: getTodos() 함수의 비동기 호출이 완료될 때까지 대기
        setTodo(todos);
      } catch (error) {
        console.error('todos를 가져오는 데 실패하였습니다:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="mb-4 font-bold text-red-400">todos 페이지</div>
      <div className="mb-10">
        <Link href="/" className="font-bold text-red-400">
          홈으로 이동
        </Link>
      </div>
      {todo.map((value) => (
        <ul key={value.id}>
          <li>todo 번호: {value.id}</li>
          <li>todo 내용: {value.title}</li>
          <br />
        </ul>
      ))}
    </>
  );
}
