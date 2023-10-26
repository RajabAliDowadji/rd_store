import React from "react";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { color_logo } from "./assets";
import "./Footer.web.css";

const Footer = () => {
  return (
    <Box className="footer_mainContainer">
      <Grid container className="footer_gridContainer">
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href="/">
            <img
              src={color_logo}
              alt="footer_image_logo_icon"
              className="footer_image"
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container className="footer_gridContainer">
        <Grid item xs={6}>
          <Typography className="footer_mainTitle">USEFUL LINKS</Typography>
          <Link href="#">
            <Typography className="footer_mainSubTitle">HOME</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">CAREERS</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">BLOG</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">CONTACT</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">
              PRIVACY POLICY
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography className="footer_mainTitle">CONNECT WITH US</Typography>
          <Link href="#">
            <Typography className="footer_mainSubTitle">Facebook</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">Instagram</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">Twitter</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">LinkedIn</Typography>
          </Link>
          <Link href="#">
            <Typography className="footer_mainSubTitle">Youtube</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container className="footer_gridContainer">
        <Grid item xs={12}>
          <Typography className="footer_sloganTitle">
            Time has a wonderful way of showing us what really matters.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
