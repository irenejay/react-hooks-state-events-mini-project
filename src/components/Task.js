import React from "react";
function Task({ task, onDelete }) {

  const { text, category } = task;
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
  <div>
        <span>{text}</span>
        <small> - {category}</small>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
