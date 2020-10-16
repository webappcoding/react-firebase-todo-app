import React, { useState } from "react";
import { List, makeStyles } from "@material-ui/core";
import Todo from "./Todo";
import TasksPopup from "./TasksPopup";

const todosStyles = makeStyles((theme) => ({
  list: {
    marginBottom: theme.spacing(2),
  },
}));

const Todos = ({ todos }) => {
  const classes = todosStyles();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleTasksOpen = (todo) => () => {
    setSelectedTodo(todo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <List className={classes.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} callBack={handleTasksOpen} />
        ))}
      </List>
      {open && (
        <TasksPopup open={open} handleClose={handleClose} todo={selectedTodo} />
      )}
    </React.Fragment>
  );
};

export default Todos;
