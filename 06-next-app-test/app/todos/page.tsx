'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTodos, Todo } from '@/api/service/todo/todoApi';

export default function todosPage() {
  const [todo, setTodo] = useState<Todo[]>([]);

  // useEffect(() => {
  //   getTodos();
  // }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodo(todos);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
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
