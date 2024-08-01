export interface Todo {
  userId: number;
  id: number;
  title: string;
}

export const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const todos = await res.json();
  return todos;
};

/*
export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  const todos: Todo[] = await res.json();
  return todos;
};
*/
