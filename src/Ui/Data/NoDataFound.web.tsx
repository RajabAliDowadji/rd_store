import React from "react";
import { Box } from "@material-ui/core";
import { no_data } from "./assets";
import "./Data.web.css";

const NoDataFound = () => {
  return (
    <Box className="noDataImgContainer">
      <img
        src={no_data}
        alt="Profile Place Holder"
        className="noDataFoundImg"
      />
    </Box>
  );
};

export default NoDataFound;
