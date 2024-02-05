// NewTaskForm.js
import React from "react";

function NewTaskForm({
  categories,
  newTaskText,
  setNewTaskText,
  newTaskCategory,
  setNewTaskCategory,
  onTaskFormSubmit,
}) {
  const handleTextChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setNewTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={newTaskText} onChange={handleTextChange} />
      </label>
      <label>
        Category:
        <select value={newTaskCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
