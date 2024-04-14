import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import { useSelector } from "react-redux";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import CartStepper from "../../components/CartStepper/CartStepper.web";
import CartBag from "../../components/CartBag/CartBag.web";
import UserAddress from "../../components/UserAddress/UserAddress.web";
import OrderPayment from "../../components/OrderPayment/OrderPayment.web";
import "./CartPage.web.css";

const CartPage = () => {
  const state = useSelector((state: any) => state);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);

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
    } else if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length === 0
    ) {
      setCartItems([]);
    }
  }, [state]);

  const activeStepChangeHandle = (activeStep: number) => {
    setActiveStep(activeStep);
  };

  return (
    <MainPage>
      <Box className="cartPage_mainContainer">
        <Box className="cartPage_innerContainer">
          {cartItems.length !== 0 && (
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className="cartPage_stepperContainer"
              >
                <CartStepper activeStep={activeStep} />
              </Grid>
            </Grid>
          )}
          {activeStep === 0 && (
            <CartBag
              activeStep={activeStep}
              activeStepChangeHandle={activeStepChangeHandle}
            />
          )}
          {activeStep === 1 && (
            <OrderPayment
              activeStep={activeStep}
              activeStepChangeHandle={activeStepChangeHandle}
            />
          )}
          {activeStep === 2 && (
            <UserAddress
              activeStep={activeStep}
              activeStepChangeHandle={activeStepChangeHandle}
            />
          )}
        </Box>
      </Box>
    </MainPage>
  );
};
export default CartPage;
