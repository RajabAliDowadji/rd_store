import React from "react";
import { Box, Typography } from "@material-ui/core";
import CustomAddButton from "../../Ui/Button/CustomAddButton.web";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Modal/GetProducts.modal";
import { ADD_CART_ITEM } from "../../Hooks/Saga/Constant";
import { useDispatch } from "react-redux";
import AddMinusButton from "../../Ui/Button/AddMinusButton.web";
import "./CustomCard.web.css";

interface CustomCardProps {
  product: Product;
}

const CustomCard = ({ product }: CustomCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          {product.product_qty && product.product_qty !== 0 ? (
            <AddMinusButton
              productQty={product.product_qty}
              product={product}
            />
          ) : (
            <CustomAddButton title={"Add"} onClick={addProductClickHandle} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CustomCard;
