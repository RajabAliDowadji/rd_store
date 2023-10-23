import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../components/Header/Header.web";
import "./Header.web.css";

const CustomHeader = (props: any) => {
  return (
    <Box className="customHeader_mainContainer">
      <Header />
      <Box className="customHeader_innerContainer">{props.children}</Box>
    </Box>
  );
};

export default CustomHeader;
