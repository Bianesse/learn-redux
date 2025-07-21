// app/page.tsx
import TodoInput from '../comps/TodoInput';
import TodoList from '../comps/TodoList';

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App with Redux</h1>
      <TodoInput />
      <TodoList />
    </main>
  );
}
