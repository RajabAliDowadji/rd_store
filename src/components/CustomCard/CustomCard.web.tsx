import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import CustomAddButton from "../../Ui/Button/CustomAddButton.web";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Modal/GetProducts.modal";
import { ADD_CART_ITEM } from "../../Hooks/Saga/Constant";
import { useDispatch, useSelector } from "react-redux";
import AddMinusButton from "../../Ui/Button/AddMinusButton.web";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import "./CustomCard.web.css";

interface CustomCardProps {
  product: Product;
}

const CustomCard = ({ product }: CustomCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [productQty, setProductQty] = useState<number | null>(null);

  useEffect(() => {
    if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length !== 0
    ) {
      state.add_edit_cart_items.cart_items.forEach((cartItem: CartItem) => {
        if (product && cartItem.product._id === product._id) {
          setProductQty(cartItem.product_qty);
        } else {
          setProductQty(null);
        }
      });
    } else if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length === 0
    ) {
      setProductQty(null);
    }
  }, [product, state]);

  const cardClickHandle = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    navigate(`/product/${product._id}`);
  };

  const addProductClickHandle = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    dispatch({
      type: ADD_CART_ITEM,
      payload: { product: product },
    });
  };

  return (
    <Box className="customCard_mainContainer" onClick={cardClickHandle}>
      <img
        src={product.product_images[0].file_url}
        alt="product_image"
        className="customCard_image"
      />
      <Typography className="customCard_titleText">
        {product.product_title}
      </Typography>
      <Typography className="customCard_sizeText">
        {product.product_size}
      </Typography>
      <Box className="customCard_actionContainer">
        <Box className="customCard_actionContainer">
          <Typography className="customCard_MRPpriceText">
            ₹{product.product_MRP_price}
          </Typography>
          <Typography className="customCard_priceText">
            ₹{product.product_price}
          </Typography>
        </Box>
        <Box>
          {productQty && productQty != null ? (
            <AddMinusButton productQty={productQty} product={product} />
          ) : (
            <CustomAddButton title={"Add"} onClick={addProductClickHandle} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CustomCard;
