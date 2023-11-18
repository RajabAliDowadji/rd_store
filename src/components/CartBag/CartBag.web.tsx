import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import CartCard from "../ProductCard/CartCard.web";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import { empty_cart_image } from "./assets";
import Login from "../../components/Login/Login.web";
import { ORDER_PLACED } from "../../Hooks/Saga/Constant";
import "./CartBag.web.css";

interface CartBagProps {
  activeStep: number;
  activeStepChangeHandle: any;
}

const CartBag = ({ activeStep, activeStepChangeHandle }: CartBagProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const user_data = localStorage.getItem("user_data");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalMRPPrice, setTotalMRPPrice] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [totalQty, setTotalQty] = useState<number>(0);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  useEffect(() => {
    if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length !== 0
    ) {
      let totalQty: number = 0;
      let totalMRPPrice: number = 0;
      setCartItems(state.add_edit_cart_items.cart_items);
      state.add_edit_cart_items.cart_items.forEach((cartItem: CartItem) => {
        totalQty = totalQty + cartItem.product_qty;
        totalMRPPrice =
          totalMRPPrice +
          cartItem.product.product_MRP_price * cartItem.product_qty;
      });
      setTotalQty(totalQty);
      setTotalMRPPrice(totalMRPPrice);
    } else if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length === 0
    ) {
      setCartItems([]);
    }
  }, [state]);

  useEffect(() => {
    if (
      state &&
      state.login_user &&
      state.login_user.isLoginSuccess &&
      state.login_user.userLoginResponse
    ) {
      setIsLoggedIn(state.login_user.isLoginSuccess);
    }
  }, [state]);

  useEffect(() => {
    if (user_data && user_data !== null) {
      setIsLoggedIn(true);
    }
  }, [user_data]);

  useEffect(() => {
    if (state && state.add_edit_cart_items) {
      setTotalPrice(state.add_edit_cart_items.total_price);
    }
  }, [state]);

  const placeMyOrderClickHandle = () => {
    if (isLoggedIn) {
      activeStepChangeHandle(activeStep + 1);
      dispatch({
        type: ORDER_PLACED,
      });
    } else {
      setIsLoginModal(true);
    }
  };

  const loginCloseClickHandle = () => {
    setIsLoginModal(false);
  };

  return (
    <>
      <Login open={isLoginModal} handleClose={loginCloseClickHandle} />
      {cartItems.length !== 0 ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid container>
              {cartItems.map((cartItem: CartItem) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  key={cartItem.product._id}
                >
                  <CartCard cartItem={cartItem} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box className="CartBag_placeorderContainer">
                  <Typography className="CartBag_billTitleTxt">
                    Order Details
                  </Typography>
                  <Box className="CartBag_placeorderInnerContainer">
                    <Typography className="CartBag_titleText">
                      Total MRP
                    </Typography>
                    <Typography className="CartBag_subTitleText">
                      ₹{totalMRPPrice}
                    </Typography>
                  </Box>
                  <Box className="CartBag_placeorderInnerContainer">
                    <Typography className="CartBag_titleText">
                      Discount on MRP
                    </Typography>
                    <Typography className="CartBag_subTitleText">
                      -₹{totalMRPPrice - totalPrice}
                    </Typography>
                  </Box>
                  <Box className="CartBag_placeorderInnerContainer">
                    <Typography className="CartBag_titleText">
                      Total Items
                    </Typography>
                    <Typography className="cartCard_subTitleText">
                      {totalQty}
                    </Typography>
                  </Box>
                  <Box className="CartBag_totalPriceContainer">
                    <Typography className="CartBag_totalPriceText">
                      Total
                    </Typography>
                    <Typography className="CartBag_totalPriceSubText">
                      ₹{totalPrice}
                    </Typography>
                  </Box>
                  <Box className="CartBag_btnContainer">
                    <ActiveButton
                      title={"Place Your Order"}
                      className="CartBag_activeBtn"
                      onClick={placeMyOrderClickHandle}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <img
            src={empty_cart_image}
            alt="empty_cart_image"
            className="CartBag_emptyCartImg"
          />
        </Box>
      )}
    </>
  );
};
export default CartBag;
