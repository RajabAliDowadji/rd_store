import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import Navigation from "../../components/Navigation/Navigation.web";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRODUCTS,
  GET_PRODUCT_SUB_CATEGORIES,
} from "../../Hooks/Saga/Constant";
import {
  GetProductSubCategoriesColumns,
  ProductSubCategory,
} from "../../Modal/GetProductSubCategories.modal";
import { useParams } from "react-router-dom";
import CustomCard from "../../components/CustomCard/CustomCard.web";
import { Product } from "../../Modal/GetProducts.modal";
import { CartItem } from "../../Modal/AddEditCartItems.modal";
import "./ProductsPage.web.css";

const ProductsPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [categoriesId, setCategoriesId] = useState<string>("");
  const [subCategoriesId, setSubCategoriesId] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [productSubCategories, setProductSubCategories] = useState<
    GetProductSubCategoriesColumns[]
  >([]);

  useEffect(() => {
    if (id) {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          product_category: id,
        },
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      setCategoriesId(id);
      dispatch({
        type: GET_PRODUCT_SUB_CATEGORIES,
        payload: { id: id },
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (subCategoriesId && categoriesId) {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          product_category: categoriesId,
          product_sub_category: subCategoriesId,
        },
      });
    }
  }, [categoriesId, dispatch, subCategoriesId]);

  useEffect(() => {
    let tempArr: GetProductSubCategoriesColumns[] = [];
    if (
      state &&
      state.get_product_sub_categories &&
      state.get_product_sub_categories.productSubCategories &&
      state.get_product_sub_categories.productSubCategories.length !== 0
    ) {
      state.get_product_sub_categories.productSubCategories.map(
        (productSubCategory: ProductSubCategory) =>
          tempArr.push({
            _id: productSubCategory._id,
            sub_category_name: productSubCategory.sub_category_name,
            sub_category_image: productSubCategory.sub_category_image,
            product_category: productSubCategory.product_category,
          })
      );
    }
    setProductSubCategories(tempArr);
  }, [state]);

  useEffect(() => {
    if (
      state &&
      state.get_products &&
      state.get_products.products &&
      state.get_products.products.length !== 0
    ) {
      let tempArr: Product[] = [];
      state.get_products.products.forEach((product: Product) => {
        if (
          state.add_edit_cart_items &&
          state.add_edit_cart_items.cart_items &&
          state.add_edit_cart_items.cart_items.length !== 0
        ) {
          const findedProduct = state.add_edit_cart_items.cart_items.find(
            (cartItem: CartItem) => cartItem.product._id === product._id
          );
          if (findedProduct) {
            tempArr.push({
              ...product,
              product_qty: findedProduct.product_qty,
            });
          } else {
            tempArr.push({ ...product, product_qty: 0 });
          }
        } else {
          tempArr.push({ ...product, product_qty: 0 });
        }
      });
      setProducts(tempArr);
    } else if (
      state &&
      state.get_products &&
      state.get_products.products &&
      state.get_products.products.length === 0
    ) {
      setProducts([]);
    }
  }, [state]);

  const categoryChangeHandle = (categoryId: string) => {
    dispatch({
      type: GET_PRODUCT_SUB_CATEGORIES,
      payload: { id: categoryId },
    });
  };

  const subCategoryClickHandle = (subCatId: string) => {
    setSubCategoriesId(subCatId);
  };

  return (
    <MainPage>
      <Navigation
        onCategoryClick={categoryChangeHandle}
        categoriesId={categoriesId}
      />
      <Box className="products_mainContainer">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {productSubCategories.map(
              (productSubCategory: ProductSubCategory) => (
                <Grid
                  container
                  className={`${
                    subCategoriesId === productSubCategory._id
                      ? "product_activeInnerContainer"
                      : "product_innerContainer"
                  }`}
                  key={productSubCategory._id}
                  onClick={() => subCategoryClickHandle(productSubCategory._id)}
                >
                  <Grid item xs={4} className="products_imgContainer">
                    <img
                      src={productSubCategory.sub_category_image.file_url}
                      alt="product_sub_category_image"
                      className={`${
                        subCategoriesId === productSubCategory._id
                          ? "products_activeSubCatImage"
                          : "products_subCatImage"
                      }`}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      className={`${
                        subCategoriesId === productSubCategory._id
                          ? "products_activeSubCatName"
                          : "products_subCatName"
                      }`}
                    >
                      {productSubCategory.sub_category_name}
                    </Typography>
                  </Grid>
                </Grid>
              )
            )}
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              {products.map((product: Product) => (
                <Grid item xs={3} key={product._id}>
                  <CustomCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainPage>
  );
};
export default ProductsPage;
