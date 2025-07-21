// components/TodoInput.tsx
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { AppDispatch } from '../store/store';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="mb-4">
      <input
        className="p-2 border rounded mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </div>
  );
}
