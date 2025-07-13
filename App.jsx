import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css"; // ensure styles are imported

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTask = (text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: new Date().getTime(),
      text,
      done: false,
    };

    setTodoItems((prevItems) => [...prevItems, newTodo]);
  };

  const handleToggleTask = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Tasks Tracker</h1>
      <TodoInput onAdd={handleAddTask} />
      <TodoList
        tasks={todoItems}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </main>
  );
}
