import React from "react";
import { useState } from "react";
import db from "../firebase";
import firebase from "firebase";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodo("");
  };
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
