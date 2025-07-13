export default function TodoItem({ task, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className="todo-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleToggle}
        />
        <span className={task.done ? "completed" : ""}>
          {task.text}
        </span>
      </label>
      <button
        className="btn-remove"
        onClick={handleDelete}
      >
        Remove
      </button>
    </li>
  );
}
