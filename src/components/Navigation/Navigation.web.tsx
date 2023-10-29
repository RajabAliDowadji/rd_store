import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductCategoriesColumns,
  ProductCategory,
} from "../../Modal/GetProductCategories.modal";
import { GET_PRODUCT_CATEGORIES } from "../../Hooks/Saga/Constant";
import { useNavigate } from "react-router-dom";
import "./Navigation.web.css";

interface NavigationProps {
  onCategoryClick: any;
  categoriesId: string;
}

const Navigation = ({ categoriesId, onCategoryClick }: NavigationProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [id, setId] = useState<string>(categoriesId);
  const [productCategories, setProductCategories] = useState<
    GetProductCategoriesColumns[]
  >([]);

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_CATEGORIES,
    });
  }, [dispatch]);

  useEffect(() => {
    setId(categoriesId);
  }, [categoriesId]);

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
  }, [onCategoryClick, state]);

  const onCategoryClickChangeHandle = (id: string) => {
    setId(id);
    navigate(`/products/${id}`);
  };

  return (
    <Box className="navigation_mainContainer">
      <Box className="navigation_innerContainer">
        <Grid container>
          {productCategories.map(
            (productCategory: ProductCategory, index: number) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={2}
                lg={2}
                key={productCategory._id}
                onClick={onCategoryClickChangeHandle.bind(
                  this,
                  productCategory._id
                )}
              >
                <Typography
                  className={`${
                    id === productCategory._id
                      ? "navigation_activeCategoryText"
                      : "navigation_categoryText"
                  }`}
                >
                  {productCategory.category_name}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};
export default Navigation;
