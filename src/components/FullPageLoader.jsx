import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const loaderStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: theme.palette.grey[100],
  },
}));
const FullPageLoader = () => {
  const classes = loaderStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress size={100} thickness={4.5} />
    </Box>
  );
};

export default FullPageLoader;
