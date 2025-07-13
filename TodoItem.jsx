export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.done ? "done" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        {task.text}
      </label>
      <button className="btn-delete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}
