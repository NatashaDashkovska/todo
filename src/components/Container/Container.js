import React from "react";
import TodoList from "../ToDoList/ToDoList";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import "./Container.css";

const Container = ({
  todos,
  onDeleteTodo,
  onSubmit,
  toggleCompleted,
  addTodo,
  filter,
  onChange,
}) => {
  const completedTodosCount = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );
  return (
    <>
      <div class="todo-container">
        <header class="todo-header">
          <h1>My Workspace</h1>
          <p class="todo-subtitle">Keep track of your daily goals</p>
        </header>
        <div class="todo-controls">
          <div class="todo-stats">
            <div class="todo-stats-item">
              <span class="todo-stats-label">All tasks</span>
              <span class="todo-stats-count todo-stats-count--all">
                {todos.length}
              </span>
            </div>
            <div class="todo-stats-item">
              <span class="todo-stats-label">Completed</span>
              <span class="todo-stats-count todo-stats-count--completed">
                {completedTodosCount}
              </span>
            </div>
          </div>
          <Filter value={filter} onChange={onChange} />
        </div>
        <Form onSubmit={onSubmit} addTodo={addTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </>
  );
};

export default Container;
