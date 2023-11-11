import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import { useSelector } from "react-redux";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import CartCard from "../../components/CartCard/CartCard.web";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import CancelButton from "../../Ui/Button/CancelButton.web";
import { empty_cart_image } from "./assets";
import Login from "../../components/Login/Login.web";
import "./CartPage.web.css";

const CartPage = () => {
  const state = useSelector((state: any) => state);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalMRPPrice, setTotalMRPPrice] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [totalQty, setTotalQty] = useState<number>(0);

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
    if (state && state.add_edit_cart_items) {
      setTotalPrice(state.add_edit_cart_items.total_price);
    }
  }, [state]);

  return (
    <MainPage>
      <Box className="cartPage_mainContainer">
        <Box className="cartPage_innerContainer">
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
                  {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className="cartPage_placeorderContainer">
                      {isLoggedIn ? (
                        <Box>
                          <Box className="cartPage_addressMainContainer">
                            <Typography className="cartPage_deliverTxt">
                              Deliver to:
                            </Typography>
                            <Typography className="cartPage_nameText">
                              Abdeali vora, 363330
                            </Typography>
                          </Box>
                          <Typography className="cartPage_addressText">
                            124,Lakshmi Naryana Chowk Voravad, Halvad, Halvad
                          </Typography>
                          <Box className="cartPage_btnContainer">
                            <CancelButton
                              title="Change address"
                              disabled={false}
                              style={{ width: "100%" }}
                            />
                          </Box>
                        </Box>
                      ) : (
                        <Login />
                      )}
                    </Box>
                  </Grid> */}
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className="cartPage_placeorderContainer">
                      <Typography className="cartPage_billTitleTxt">
                        Order Details
                      </Typography>
                      <Box className="cartPage_placeorderInnerContainer">
                        <Typography className="cartPage_titleText">
                          Total MRP
                        </Typography>
                        <Typography className="cartCard_subTitleText">
                          ₹{totalMRPPrice}
                        </Typography>
                      </Box>
                      <Box className="cartPage_placeorderInnerContainer">
                        <Typography className="cartPage_titleText">
                          Discount on MRP
                        </Typography>
                        <Typography className="cartCard_subTitleText">
                          -₹{totalMRPPrice - totalPrice}
                        </Typography>
                      </Box>
                      <Box className="cartPage_placeorderInnerContainer">
                        <Typography className="cartPage_titleText">
                          Total Items
                        </Typography>
                        <Typography className="cartCard_subTitleText">
                          {totalQty}
                        </Typography>
                      </Box>
                      <Box className="cartPage_totalPriceContainer">
                        <Typography className="cartPage_totalPriceText">
                          Total
                        </Typography>
                        <Typography className="cartPage_totalPriceSubText">
                          ₹{totalPrice}
                        </Typography>
                      </Box>
                      <Box className="cartPage_btnContainer">
                        <ActiveButton
                          title={"Place your order"}
                          className="cartPage_activeBtn"
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
                className="cartPage_emptyCartImg"
              />
            </Box>
          )}
        </Box>
      </Box>
    </MainPage>
  );
};
export default CartPage;
