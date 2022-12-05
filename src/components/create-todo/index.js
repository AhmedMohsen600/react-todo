import { useState } from 'react';

export default function CreateTodo({ addTodo }) {
  const [todo, setTodo] = useState({
    name: '',
    content: '',
  });

  const handelClick = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({
      name: '',
      content: '',
    });
  };

  const handelChange = (e) => {
    const { name, value } = e.target;

    setTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handelClick}>
      <input
        placeholder="type your name"
        onChange={handelChange}
        name="name"
        value={todo.name}
      />
      <textarea
        placeholder="write your todo"
        name="content"
        value={todo.content}
        onChange={handelChange}
      />
      <button type="submit">Add your todo</button>
    </form>
  );
}
