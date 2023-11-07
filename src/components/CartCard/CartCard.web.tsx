import React from "react";
import { Box, Typography } from "@material-ui/core";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import AddMinusButton from "../../Ui/Button/AddMinusButton.web";
import { delete_icon } from "./assets";
import "./CartCard.web.css";

interface CartItemProps {
  cartItem: CartItem;
}

const CartCard = ({ cartItem }: CartItemProps) => {
  return (
    <Box className="cartCard_mainContainer">
      <Box className="cartCard_innerContainer">
        <Box className="cartCard_productContainer">
          <Box className="cartCard_imgTitleContainer">
            <img
              src={cartItem.product.product_images[0].file_url}
              alt="cartItem_product_images"
              className="cartCard_productImage"
            />
          </Box>
          <Box className="cartCard_titleContainer">
            <Typography className="cartCard_productTitleText">
              {cartItem.product.product_title}
            </Typography>
            <Typography className="cartCard_productSizeText">
              {cartItem.product.product_size}
            </Typography>
            <Typography className="cartCard_productPriceText">
              ₹{cartItem.product.product_price}
            </Typography>
          </Box>
        </Box>
        <Box className="cartCard_btnActionContainer">
          <img
            src={delete_icon}
            alt="rd_store_delete_icon"
            className="cartCard_deleteIcon"
          />
          <AddMinusButton
            productQty={cartItem.product_qty}
            product={cartItem.product}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CartCard;
