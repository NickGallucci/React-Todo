import React from "react";
import "./Todo.css";





function ToDo({ todo, toggleCompleted }) {
  return (
    <li
      className={todo.completed ? `completed` : null}
      onClick={() => toggleCompleted(todo.id)}
    >
      {todo.task}
    </li>
  );
};


export default ToDo;