import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { White_logo } from "./assets";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import "./Header.web.css";

const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user_data");
  const [userData, setUserData] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>("");

  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          border: 0,
        },
      },
    },
  });

  useEffect(() => {
    if (auth) {
      setUserData(JSON.parse(auth));
    } else {
      setUserData(null);
    }
  }, [auth, navigate]);

  const logoHandleClick = () => {
    if (userData != null) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const searchTextHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const classes = useStyles();
  return (
    <Box className="header_mainContainer">
      <Grid container className="header_mainGrid">
        <Grid item xs={4} lg={2} md={2}>
          <img
            src={White_logo}
            alt="white_logo_image"
            className="header_logo"
            onClick={logoHandleClick}
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6}></Grid>
        <Grid item xs={12} lg={2} md={2}>
          <Box className="header_searchContainer">
            <TextField
              variant="outlined"
              id="search"
              name="search"
              type="text"
              placeholder="Search..."
              className={`search_textField ${classes.root}`}
              value={searchText}
              onChange={searchTextHandle}
              inputProps={{
                className: "headerTextField_InputProps",
              }}
              InputProps={{
                className: "headerTextField_Input",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={2} md={2}>
          <Box className="header_iconContainer">
            <Box className="header_subContainer">
              <AccountCircleOutlinedIcon className="header_icon" />
              <Typography className="header_iconText">Profile</Typography>
            </Box>
            <Box className="header_subContainer">
              <FavoriteIcon className="header_icon" />
              <Typography className="header_iconText">Wishlist</Typography>
            </Box>
            <Box className="header_subContainer">
              <LocalMallOutlinedIcon className="header_icon" />
              <Typography className="header_iconText">My Bag</Typography>
            </Box>
            <Box className="header_subContainer">
              <QuestionAnswerIcon className="header_icon" />
              <Typography className="header_iconText">Let's chat</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
