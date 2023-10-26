import React from "react";
import { Box, Typography } from "@material-ui/core";
import CustomAddButton from "../../Ui/Button/CustomAddButton.web";
import "./CustomCard.web.css";

const CustomCard = (props: any) => {
  return (
    <Box className="customCard_mainContainer">
      <img
        src={props.product.product_images[0].file_url}
        alt="product_image"
        className="customCard_image"
      />
      <Typography className="customCard_titleText">
        {props.product.product_title}
      </Typography>
      <Typography className="customCard_sizeText">
        {props.product.product_size}
      </Typography>
      <Box className="customCard_actionContainer">
        <Box className="customCard_actionContainer">
          <Typography className="customCard_MRPpriceText">
            ₹{props.product.product_MRP_price}
          </Typography>
          <Typography className="customCard_priceText">
            ₹{props.product.product_price}
          </Typography>
        </Box>
        <Box>
          <CustomAddButton title={"Add"} />
        </Box>
      </Box>
    </Box>
  );
};
export default CustomCard;
