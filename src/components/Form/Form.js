import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit(this.state.inputValue);
    this.props.addTodo(this.state.inputValue);

    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <form class="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          class="todo-input"
          name="inputValue"
          required
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit" class="todo-button">
          Add Task
        </button>
      </form>
    );
  }
}

export default Form;
