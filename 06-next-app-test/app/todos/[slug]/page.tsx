// 동적 라우트 페이지

import { notFound } from 'next/navigation';
import { Todo } from '@/api/service/todo/todoApi';

interface paramsType {
  params: { slug: string };
}

// 특정 Todo를 가져오는 함수
async function getTodoById(id: string) {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    (res) => res.json()
  );
  return todos.find((todo: Todo) => todo.id === parseInt(id)) || null;
}

export default async function TodoPage({ params }: paramsType) {
  const { slug } = params;
  const todo = await getTodoById(slug);

  if (!todo) {
    notFound();
  }

  return (
    <div>
      <h1>Todo 번호: {todo.id}</h1>
      <p>Todo 내용: {todo.title}</p>
    </div>
  );
}

// 빌드 시 미리 생성할 동적 경로를 정의합니다
export async function generateStaticParams() {
  const todos: Todo[] = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  ).then((res) => res.json());

  return todos.map((todo) => ({
    slug: todo.id.toString(),
  }));
}
