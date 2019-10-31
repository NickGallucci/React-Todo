import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";




class App extends React.Component {
  state = {
    todos: []
  };


  componentDidMount = () => {
    const localToDos = JSON.parse(localStorage.getItem("todoList"));
    this.setState({
      todos: localToDos || []
    });
  };


  handleSubmit = (e, newTask) => {
    e.preventDefault();
    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    const newToDoList = [...this.state.todos, taskShape];

    this.setState({
      todos: newToDoList
    });
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
  };


  toggleCompleted = id => {
    const toDoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: toDoById
    });
    localStorage.setItem("todoList", JSON.stringify(toDoById));
  };


  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({
      todos: completed
    });
    localStorage.setItem("todoList", JSON.stringify(completed));
  };


  render() {
    if (!this.state.todos) return <h1>loading to dos... </h1>;
    return (
      <div>
        <h2>Welcome to your Todo List App!</h2>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
        <h2> Made by: Nick</h2>
      </div>
    );
  }
}


export default App;