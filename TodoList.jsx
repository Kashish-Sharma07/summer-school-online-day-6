import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.length === 0 && <li>No tasks added yet.</li>}
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
