import React from "react";
import { Box, Grid } from "@material-ui/core";
import { color_logo } from "./assets";
import "./Header.web.css";

const PrivateHeader = () => {
  return (
    <Box className="header_mainContainer">
      <Grid container className="header_gridContainer">
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <img
            src={color_logo}
            alt="rd_store_transparent_logo"
            className="header_logoImage"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PrivateHeader;
