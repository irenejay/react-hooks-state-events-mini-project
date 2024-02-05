import React from "react";


function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => onCategoryClick("All")} className={selectedCategory === "All" ? "selected" : ""}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
