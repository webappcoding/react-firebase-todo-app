import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import db from "./firebase";
function App() {
  const [todos, setTodos] = useState([]);

  // fetch data from firebase
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  return (
    <div className="container">
      <h1 className="h1 my-5 text-center">Web App Coding Todo App</h1>
      <AddTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
