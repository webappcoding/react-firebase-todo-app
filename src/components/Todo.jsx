import React from "react";
import db from "../firebase";

const Todo = ({ todo }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    db.collection("todos").doc(todo.id).delete();
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{todo.todo}</span>{" "}
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        X
      </button>{" "}
    </li>
  );
};

export default Todo;
