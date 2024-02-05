// App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Work");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = () => {
    // Validate the form inputs if needed
    if (newTaskText.trim() === "") {
      // Handle validation error
      return;
    }

    const newTask = {
      id: TASKS.length + 1, // Assuming unique IDs for tasks
      text: newTaskText,
      category: newTaskCategory,
    };

    // Add the new task to the list
    // You may need to update the state of TASKS or call a function to handle this
    console.log("Adding new task:", newTask);

    // Clear form inputs
    setNewTaskText("");
    setNewTaskCategory("Work");
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        newTaskCategory={newTaskCategory}
        setNewTaskCategory={setNewTaskCategory}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
