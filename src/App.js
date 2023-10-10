import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(checkDueDate, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]); // Add 'tasks' as a dependency

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate || !dueTime) {
      setAlertMessage('Please fill in all fields.');
      return;
    }

    const newTask = {
      id: new Date().getTime().toString(),
      title,
      description,
      dueDate,
      dueTime,
    };
    

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
    setDueTime('');
    setShowForm(false);
  };

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setDueTime(taskToEdit.dueTime);
      setTasks(tasks.filter((task) => task.id !== taskId));
      setShowForm(true);
    }
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };

  const checkDueDate = () => {
    const currentTime = new Date();
    tasks.forEach((task) => {
      const dueDateTime = new Date(`${task.dueDate}T${task.dueTime}`);
      if (dueDateTime <= currentTime) {
        setAlertMessage(`Task "${task.title}" due time completed.`);
        setTasks((prevTasks) =>
          prevTasks.map((prevTask) =>
            prevTask.id === task.id ? { ...prevTask, completed: true } : prevTask
          )
        );
      }
    });
  };

  return (
    <div className="container">
      <h1 className="header">TO - DO - LIST</h1>
      <div className="add-div">
        <button onClick={() => setShowForm(true)}>Add Task</button>
      </div>
      {showForm && (
        <div className="form--card">
          <form onSubmit={handleAddTask}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
              type = "text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dueTime">Due Time</label>
              <input
                type="time"
                id="dueTime"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      )}
      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task--card" key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>
                Due: {task.dueDate} {task.dueTime}
              </p>
              <button onClick={() => handleEdit(task.id)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tasks found.</p>
      )}
      {alertMessage && (
        <div className="alert-message">
          <p>{alertMessage}</p>
          {alertMessage !== 'Task due time completed.' && (
            <button onClick={handleAlertClose}>OK</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
