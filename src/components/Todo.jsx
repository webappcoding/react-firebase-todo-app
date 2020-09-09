import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{todo}</span> <button className="btn btn-sm btn-danger">X</button>{" "}
    </li>
  );
};

export default Todo;
