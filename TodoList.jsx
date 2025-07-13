import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <div className="todo-list-wrapper">
      {tasks.length === 0 ? (
        <p className="empty-message">You haven’t added any tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
