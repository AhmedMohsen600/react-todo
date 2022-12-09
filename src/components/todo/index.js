import './todo.css';

export default function Todo({ name, content, id, removeTodo }) {
  const handleRemove = () => {
    removeTodo(id);
  };
  return (
    <div>
      <h3>{name}</h3>
      <p>{content}</p>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}
