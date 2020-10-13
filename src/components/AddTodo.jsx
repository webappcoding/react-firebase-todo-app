import React from "react";
import { useState } from "react";
import { db, timestamp } from "../firebase";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      db.collection("todos").add({
        todo: todo,
        timestamp: timestamp(),
      });
      setError(null);
      setTodo("");
    } else {
      setError("Please input your text.");
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className={error ? "form-control is-invalid" : "form-control"}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </form>
  );
};

export default AddTodo;
