import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} onClick={() => toggleComplete(index)} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            {t.text}
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
