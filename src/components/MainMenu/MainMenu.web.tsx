import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductCategoriesColumns,
  ProductCategory,
} from "../../Modal/GetProductCategories.modal";
import { GET_PRODUCT_CATEGORIES } from "../../Hooks/Saga/Constant";
import "./MainMenu.web.css";

const MainMenu = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [productCategories, setProductCategories] = useState<
    GetProductCategoriesColumns[]
  >([]);

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_CATEGORIES,
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      state &&
      state.get_product_categories &&
      state.get_product_categories.productCategories &&
      state.get_product_categories.productCategories.length !== 0
    ) {
      let tempArr: GetProductCategoriesColumns[] = [];
      state.get_product_categories.productCategories.map(
        (productCategory: ProductCategory) =>
          tempArr.push({
            _id: productCategory._id,
            category_name: productCategory.category_name,
            category_image: productCategory.category_image,
          })
      );
      setProductCategories(tempArr);
    }
  }, [state]);

  return (
    <Box className="mainMenu_mainContainer">
      <Grid container className="mainMenu_gridContainer">
        {productCategories.map((productCategory: ProductCategory) => (
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Box className="mainMenu_innerContainer">
              <img
                src={productCategory.category_image.file_url}
                className="mainMenu_categoryImage"
                alt="product_category_image"
              />
              <Typography className="mainMenu_categoryText">
                {productCategory.category_name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default MainMenu;
