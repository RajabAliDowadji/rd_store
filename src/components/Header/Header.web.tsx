import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { color_logo, shop_icon, user_icon } from "./assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login.web";
import {
  ADD_BULK_CART_ITEMS,
  GET_USER_CART_ITEMS,
} from "../../Hooks/Saga/Constant";
import "./Header.web.css";
import { AddBulkCartItem, CartItem } from "../../Modal/AddBulkCartItems.modal";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const user_data = localStorage.getItem("user_data");
  const [searchText, setSearchText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const searchTextHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const logoClickHandler = () => {
    navigate("/");
  };

  const loginOpenClickHandle = () => {
    setIsLoginModal(true);
  };

  const loginCloseClickHandle = () => {
    setIsLoginModal(false);
  };

  const cartClickHandle = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (state && state.add_edit_cart_items) {
      setTotalPrice(state.add_edit_cart_items.total_price);
    }
  }, [state]);

  useEffect(() => {
    if (user_data && user_data !== null) {
      setIsLogin(true);
      setUserName(JSON.parse(user_data).user_name);
    }
  }, [user_data]);

  useEffect(() => {
    if (
      state &&
      state.add_edit_user &&
      state.add_edit_user &&
      state.add_edit_user.user &&
      state.add_edit_user.user !== null &&
      state.add_edit_user.isSuccess
    ) {
      setIsLogin(true);
      setUserName(state.add_edit_user.user.user_name);
      setIsAuth(true);
    }
  }, [state]);

  useEffect(() => {
    if (
      state &&
      state.login_user &&
      state.login_user.isLoginSuccess &&
      state.login_user.userLoginResponse
    ) {
      setIsLogin(true);
      setUserName(state.login_user.userLoginResponse.data.user_name);
      setIsAuth(true);
    }
  }, [state]);

  useEffect(() => {
    if (
      state &&
      state.get_user_items &&
      !state.get_user_items.isAPICalled &&
      isLogin
    ) {
      dispatch({
        type: GET_USER_CART_ITEMS,
      });
    }
  }, [dispatch, state, isLogin]);

  useEffect(() => {
    if (
      state &&
      state.add_edit_cart_items &&
      state.add_edit_cart_items.cart_items &&
      state.add_edit_cart_items.cart_items.length !== 0 &&
      isAuth
    ) {
      let tempPayload: AddBulkCartItem[];
      tempPayload = state.add_edit_cart_items.cart_items.map(
        (cart_item: CartItem) => {
          return {
            product: cart_item.product._id,
            product_qty: cart_item.product_qty,
          };
        }
      );
      dispatch({
        type: ADD_BULK_CART_ITEMS,
        payload: { cart_items: tempPayload },
      });
      setIsAuth(false);
    }
  }, [dispatch, state, isLogin, isAuth]);

  return (
    <Box className="header_mainContainer">
      <Login open={isLoginModal} handleClose={loginCloseClickHandle} />
      <Grid container className="header_gridContainer">
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <img
            src={color_logo}
            alt="rd_store_transparent_logo"
            className="header_logoImage"
            onClick={logoClickHandler}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={5}
          lg={7}
          className="header_searchGridContainer"
        >
          <Box className="header_searchContainer">
            <TextField
              variant="outlined"
              id="search"
              name="search"
              type="text"
              placeholder="Search..."
              className={`header_textField`}
              value={searchText}
              onChange={searchTextHandle}
              inputProps={{
                className: "header_inputProps",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className="header_searchIcon" />
                  </InputAdornment>
                ),
                className: "header_input",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <Grid container className="header_btnContainer">
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              className="header_loginGridContainer"
            >
              {userName !== "" ? (
                <Box className="header_userContainer">
                  <img
                    src={user_icon}
                    alt="header_user_icon"
                    className="header_userIcon"
                  />
                  <Typography className="header_personText">
                    {userName}
                  </Typography>
                </Box>
              ) : (
                <Typography
                  className="header_personText"
                  onClick={loginOpenClickHandle}
                >
                  Login
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              {totalPrice === 0 ? (
                <Box
                  className="header_btnInnerContainer"
                  onClick={cartClickHandle}
                >
                  <ShoppingCartIcon className="header_cartIcon" />
                  <Typography className="header_cartText">Cart</Typography>
                </Box>
              ) : (
                <Box
                  className="header_itemsContainer"
                  onClick={cartClickHandle}
                >
                  <Box>
                    <Typography className="header_itemsText">Items</Typography>
                    <Typography className="header_itemsPriceText">
                      ₹{totalPrice}
                    </Typography>
                  </Box>
                  <img
                    src={shop_icon}
                    alt="rd_store_shop_icon_bag"
                    className="header_shopIcon"
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
