// components/TodoList.tsx
'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.items);

  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
