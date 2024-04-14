import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import ProductCarousal from "../../components/ProductCarousal/ProductCarousal.web";
import CustomAddButton from "../../Ui/Button/CustomAddButton.web";
import {
  ADD_CART_ITEM,
  ADD_PRODUCT_RATING,
  GET_PRODUCT_BY_ID,
  RESET_STATE,
} from "../../Hooks/Saga/Constant";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../Modal/GetProducts.modal";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import AddMinusButton from "../../Ui/Button/AddMinusButton.web";
import Rating from "@material-ui/lab/Rating";
import "./CustomProductPage.web.css";

const CustomProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [product, setProduct] = useState<Product | null>(null);
  const [value, setValue] = React.useState<number | null>(2);

  useEffect(() => {
    if (id) {
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: { id: id },
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (
      state &&
      state.get_product_by_id &&
      state.get_product_by_id.product &&
      state.get_product_by_id.product !== null
    ) {
      if (
        state.add_edit_cart_items &&
        state.add_edit_cart_items.cart_items &&
        state.add_edit_cart_items.cart_items.length !== 0
      ) {
        const findedProduct = state.add_edit_cart_items.cart_items.find(
          (cartItem: CartItem) =>
            cartItem.product._id === state.get_product_by_id.product._id
        );
        if (findedProduct) {
          setProduct({
            ...state.get_product_by_id.product,
            product_qty: findedProduct.product_qty,
          });
          setValue(state.get_product_by_id.product.product_rating.rating);
        } else {
          setProduct({ ...state.get_product_by_id.product, product_qty: 0 });
          setValue(state.get_product_by_id.product.product_rating.rating);
        }
      } else {
        setProduct({ ...state.get_product_by_id.product, product_qty: 0 });
        setValue(state.get_product_by_id.product.product_rating.rating);
      }
    }
  }, [state]);

  useEffect(() => {
    if (
      state &&
      state.add_product_rating &&
      state.add_product_rating.isSuccess
    ) {
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: { id: id },
      });
      dispatch({
        type: RESET_STATE,
        payload: { state: "rating" },
      });
    }
  }, [dispatch, id, state]);

  const addProductClickHandle = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    dispatch({
      type: ADD_CART_ITEM,
      payload: { product: product },
    });
  };

  const ratingChangeHandle = (event: any, newValue: number | null) => {
    setValue(newValue);
    dispatch({
      type: ADD_PRODUCT_RATING,
      payload: { product: product && product._id, rating: newValue },
    });
  };

  return (
    <MainPage>
      <Box className="customproduct_mainContainer">
        {product && product !== null && (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ProductCarousal product_images={product.product_images} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="customproduct_productSubContainer">
                <Typography className="customproduct_productTitleText">
                  {product.product_title}
                </Typography>
                <Typography className="customproduct_productBrandText">
                  {product.product_brand.brand_name}
                </Typography>
              </Box>
              <Box className="customproduct_productSubContainer">
                <Typography className="customproduct_productPriceText">
                  ₹{product.product_price}
                </Typography>
                <Typography className="customproduct_productMRPPriceText">
                  M.R.P ₹{product.product_MRP_price}
                </Typography>
              </Box>
              <Box className="customproduct_reviewContainer">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={ratingChangeHandle}
                />
              </Box>
              <Box className="customproduct_productBtnContainer">
                {product.product_qty && product.product_qty !== 0 ? (
                  <AddMinusButton
                    productQty={product.product_qty}
                    product={product}
                  />
                ) : (
                  <CustomAddButton
                    title={"Add"}
                    onClick={addProductClickHandle}
                  />
                )}
              </Box>
              <Box className="customproduct_productBtnContainer">
                <Typography className="customproduct_descTitleText">
                  About this product
                </Typography>
                <Typography className="customproduct_descText">
                  {product.product_description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </MainPage>
  );
};
export default CustomProductPage;
