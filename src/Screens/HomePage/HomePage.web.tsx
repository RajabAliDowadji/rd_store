import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MainPage from "../MainPage/MainPage.web";
import MainMenu from "../../components/MainMenu/MainMenu.web";
import CustomCarousal from "../../components/CustomCarousal/CustomCarousal.web";
import { useDispatch, useSelector } from "react-redux";
import { ProductCategory } from "../../Modal/GetProductCategories.modal";
import { GET_PRODUCTS } from "../../Hooks/Saga/Constant";
import { Product } from "../../Modal/GetProducts.modal";
import "./HomePage.web.css";
import { CartItem } from "../../Modal/AddEditCartItems.modal";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [products, setProducts] = useState<Product[]>([]);
  const [vegitables, setVegitables] = useState<ProductCategory | null>(null);

  useEffect(() => {
    if (vegitables) {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          product_category: vegitables._id,
        },
      });
    }
  }, [dispatch, vegitables]);

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

  useEffect(() => {
    if (
      state &&
      state.get_product_categories &&
      state.get_product_categories.productCategories &&
      state.get_product_categories.productCategories.length !== 0
    ) {
      state.get_product_categories.productCategories.forEach(
        (productCategory: ProductCategory) => {
          if (productCategory.category_name === "Vegetables & Fruits") {
            setVegitables(productCategory);
          }
        }
      );
    }
  }, [state]);

  return (
    <MainPage>
      <Box className="homepage_mainContainer">
        <MainMenu />
        <Box className="homepage_carousalContainer">
          <CustomCarousal products={products} category={vegitables} />
        </Box>
      </Box>
    </MainPage>
  );
};
export default HomePage;
