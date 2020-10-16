import { Box, Typography } from "@material-ui/core";
import React from "react";

const DocNotFound = ({ title }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h3">{title} Not Found!</Typography>
    </Box>
  );
};

export default DocNotFound;
