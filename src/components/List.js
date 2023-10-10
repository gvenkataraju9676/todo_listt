import React from "react";

function List({ tasks, setTasks }) {
  const handleCheckBox = (key) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.key === key) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleEdit = (key) => {
    // Handle task editing
  };

  const handleDelete = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.key !== key);
    });
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div className={`task ${task.completed ? "completed" : ""}`} key={task.key}>
          <div className="row-1">
            {/* Task details */}
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <div className="row-2">
            {/* Task due date, completion checkbox, and buttons */}
            <span>{task.dueDate}</span>
            <label className="checkbox-label" htmlFor={task.key}>
              Completed:
              <input
                type="checkbox"
                id={task.key}
                checked={task.completed}
                onChange={() => handleCheckBox(task.key)}
              />
            </label>
            <button onClick={() => handleEdit(task.key)}>Edit</button>
            <button onClick={() => handleDelete(task.key)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
