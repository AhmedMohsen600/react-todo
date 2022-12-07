import { useState } from 'react';
import { CreateTodo, Todo } from '..';
import './todo-parent.css';

export default function TodoParent() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo, i) => i !== id));
  };
  return (
    <div className="parent">
      <CreateTodo addTodo={addTodo} />
      {todos.map((todo, i) => (
        <Todo
          name={todo.name}
          content={todo.content}
          id={i}
          key={i}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
