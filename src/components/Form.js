import React, { useState } from "react";

function Form({ onFormSubmit, errorMessage }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name,
      description,
      dueDate,
      completed,
    };
    onFormSubmit(newTask);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setDueDate("");
    setCompleted(false);
  };

  return (
    <div className="form--card" id="display--form">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="form z-10" onSubmit={handleSubmit}>
        {/* Form inputs */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="text"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}

export default Form;
