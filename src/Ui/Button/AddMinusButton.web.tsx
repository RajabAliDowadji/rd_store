import React from "react";
import { Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Product } from "../../Modal/GetProducts.modal";
import {
  ADD_CART_ITEM,
  REMOVE_SINGLE_CART_ITEM,
} from "../../Hooks/Saga/Constant";
import { useDispatch } from "react-redux";
import "./Button.web.css";

interface AddMinusButtonProps {
  productQty: number;
  product: Product;
}

const AddMinusButton = ({ productQty, product }: AddMinusButtonProps) => {
  const dispatch = useDispatch();

  const addProductClickHandle = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    dispatch({
      type: ADD_CART_ITEM,
      payload: { product: product },
    });
  };

  const removeSingleProductClickHandle = (event: {
    stopPropagation: () => void;
  }) => {
    event.stopPropagation();
    dispatch({
      type: REMOVE_SINGLE_CART_ITEM,
      payload: { product: product },
    });
  };

  return (
    <Box className="addMinusButton_mainContainer">
      <RemoveIcon
        className="addMinusButton_iconContainer"
        onClick={removeSingleProductClickHandle}
      />
      <Typography className="addMinusButton_productQtyText">
        {productQty}
      </Typography>
      <AddIcon
        className="addMinusButton_iconContainer"
        onClick={addProductClickHandle}
      />
    </Box>
  );
};

export default AddMinusButton;
