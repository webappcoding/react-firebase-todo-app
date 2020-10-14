import React from "react";
// import { db } from "../firebase";
// import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import Avatar from "@material-ui/core/Avatar";

// const useStyles = makeStyles((theme) => ({
//   subheader: {
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const Todo = ({ todo, callBack }) => {
  // const classes = useStyles();

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   db.collection("todos").doc(todo.id).delete();
  // };

  return (
    <React.Fragment key={todo.id}>
      {/* {id === 1 && (
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
      )}
      {id === 3 && (
        <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>
      )} */}
      <ListItem button onClick={callBack(todo)}>
        {/* <ListItemAvatar>
          <Avatar alt="Profile Picture" src={person} />
        </ListItemAvatar> */}
        <ListItemText primary={todo.todo} secondary={todo.description} />
      </ListItem>
    </React.Fragment>
  );
};

export default Todo;
