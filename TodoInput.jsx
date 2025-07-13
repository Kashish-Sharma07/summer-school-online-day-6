import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskText.trim() === "") return;
    onAdd(taskText);
    setTaskText("");
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="task-input">Enter Task</label>
        <input
          type="text"
          id="task-input"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Type your task..."
        />
      </div>
      <button type="submit" className="btn-submit">
        Add
      </button>
    </form>
  );
}
