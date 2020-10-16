import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Tasks from "./Tasks";
import db from "../firebase";
import FullPageLoader from "./FullPageLoader";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TasksPopup = ({ open, handleClose, todo }) => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTasks = async () => {
    await db
      .collection("todos")
      .doc(todo.id)
      .collection("tasks")
      .get()
      .then((querySnapshot) => {
        setTasks(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setLoading(false);
      });
  };
  useEffect(() => {
    getTasks();
  }, [open]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Task's of {todo.todo}
          </Typography>
        </Toolbar>
      </AppBar>
      {loading ? <FullPageLoader /> : <Tasks tasks={tasks} />}
    </Dialog>
  );
};

export default React.memo(TasksPopup);
