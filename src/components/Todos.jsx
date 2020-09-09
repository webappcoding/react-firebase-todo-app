import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
