import React from "react";
import "./ToDoList.css";
import classNames from "classnames";



const TodoList = ({ todos, onDeleteTodo, toggleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li
            className={classNames("todo-item", {
              "todo-item--completed": todo.completed,
            })}
            key={todo.id}
          >
            <label className="todo-checkbox-wrapper">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => {
                  toggleCompleted(todo.id);
                }}
              />
              <span className="todo-checkmark"></span>
            </label>
            <span className="todo-text">{todo.text}</span>
            <button
              className="todo-delete-btn"
              aria-label="Delete task"
              onClick={() => {
                onDeleteTodo(todo.id);
              }}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

//    <li class="todo-item todo-item--completed">
//      <label class="todo-checkbox-wrapper">
//        <input type="checkbox" checked class="todo-checkbox" />
//        <span class="todo-checkmark"></span>
//      </label>
//      <span class="todo-text">Learn German B2</span>
//      <button class="todo-delete-btn" aria-label="Delete task">
//        &times;
//      </button>
//    </li>;
