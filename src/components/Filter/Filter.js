import React from "react";
import "./filter.css";

const Filter = ({ value, onChange }) => {
  return (
    <div class="todo-filter">
      <label class="todo-filter-label">
        <span class="todo-filter-title">Filter by name</span>
        <input
          value={value}
          type="text"
          class="todo-filter-input"
          placeholder="Search tasks..."
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
