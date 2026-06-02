import React, { Component } from "react";
import todos from "./todos.json";
import Container from "./components/Container";
import "./App.css";
import shortid from "shortid";

class App extends Component {
  state = {
    todos,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));

    console.log(todo);
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  toggleCompleted = (todoId) => {
    // console.log(todoId);

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleTodos = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <Container
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onSubmit={this.formSubmitHandler}
          toggleCompleted={this.toggleCompleted}
          addTodo={this.addTodo}
          filter={this.state.filter}
          onChange={this.changeFilter}
        />
      </>
    );
  }
}

export default App;
