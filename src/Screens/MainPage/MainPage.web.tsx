import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../components/Header/Header.web";
import Footer from "../../components/Footer/Footer.web";
import PrivateHeader from "../../components/Header/PrivateHeader.web";
import "./MainPage.web.css";

const MainPage = (props: any) => {
  return (
    <Box>
      <Header />
      {/* <PrivateHeader /> */}
      <Box>{props.children}</Box>
      <Footer />
    </Box>
  );
};
export default MainPage;
