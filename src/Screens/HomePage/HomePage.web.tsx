import React from "react";
import { Box } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import MainMenu from "../../components/MainMenu/MainMenu.web";
import CustomCarousal from "../../components/CustomCarousal/CustomCarousal.web";
import "./HomePage.web.css";

const HomePage = () => {
  return (
    <MainPage>
      <Box className="homepage_mainContainer">
        <MainMenu />
        <Box className="homepage_carousalContainer">
          <CustomCarousal />
        </Box>
        <Box className="homepage_carousalContainer">
          <CustomCarousal />
        </Box>
        <Box className="homepage_carousalContainer">
          <CustomCarousal />
        </Box>
      </Box>
    </MainPage>
  );
};
export default HomePage;
