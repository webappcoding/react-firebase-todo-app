import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { db } from "./firebase";
function App() {
  const [todos, setTodos] = useState([]);

  // fetch data from firebase
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  return (
    <div className="d-flex flex-column overflow-hidden">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              React Todo App
            </a>
          </div>
        </nav>
      </header>
      <main className="container pt-4">
        <AddTodo />
        <Todos todos={todos} />
      </main>
    </div>
  );
}

export default App;
