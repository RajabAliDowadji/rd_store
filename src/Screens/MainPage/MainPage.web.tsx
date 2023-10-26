import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../components/Header/Header.web";
import Footer from "../../components/Footer/Footer.web";
import "./MainPage.web.css";

const MainPage = (props: any) => {
  return (
    <Box>
      <Header />
      <Box>{props.children}</Box>
      <Footer />
    </Box>
  );
};
export default MainPage;
