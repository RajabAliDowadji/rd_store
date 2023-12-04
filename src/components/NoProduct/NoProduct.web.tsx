import React from "react";
import { Box, Typography } from "@material-ui/core";
import { no_product_found } from "./assets";
import "./NoProduct.web.css";

interface NoProductProps {
  titleMsg: string;
}

const NoProduct = ({ titleMsg }: NoProductProps) => {
  return (
    <Box className="noproduct_mainContainer">
      <img
        src={no_product_found}
        alt="no_product_found"
        className="noproduct_img"
      />
      <Typography className="noproduct_titleText">{titleMsg}</Typography>
    </Box>
  );
};
export default NoProduct;
