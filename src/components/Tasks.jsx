import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import DocNotFound from "./DocNotFound";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tasks({ tasks }) {
  const classes = useStyles();

  const handleToggle = (value) => () => {
    console.log(value);
  };

  return (
    <React.Fragment>
      {tasks.length ? (
        <List className={classes.root}>
          {tasks.map((value) => (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.completed}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={value.task} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <DocNotFound title="Tasks" />
      )}
    </React.Fragment>
  );
}
