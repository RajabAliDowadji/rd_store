import React, { useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { color_logo } from "./assets";
import "./Header.web.css";

const Header = () => {
  const [searchText, setSearchText] = useState<string>("");
  const searchTextHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <Box className="header_mainContainer">
      <Grid container className="header_gridContainer">
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <img
            src={color_logo}
            alt="rd_store_transparent_logo"
            className="header_logoImage"
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
              <Typography className="header_personText">Login</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="header_btnInnerContainer">
                <ShoppingCartIcon className="header_cartIcon" />
                <Typography className="header_cartText">Cart</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
