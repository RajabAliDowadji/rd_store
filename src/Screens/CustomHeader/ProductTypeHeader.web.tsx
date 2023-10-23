import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_TYPES } from "../../Hooks/Saga/Constant";
import { ProductType } from "../../Modal/GetProductTypes.modal";
import "./Header.web.css";

const ProductTypeHeader = (props: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  const [activeProductType, setActiveProductType] = useState<string>("All");

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT_TYPES,
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      state &&
      state.get_product_types &&
      state.get_product_types.productTypes &&
      state.get_product_types.productTypes.length !== 0
    ) {
      let tempArr: ProductType[] = [];
      state.get_product_types.productTypes.map((productType: ProductType) =>
        tempArr.push({
          _id: productType._id,
          type_name: productType.type_name,
          search_name: productType.search_name,
        })
      );
      setProductTypes(tempArr);
    }
  }, [state]);

  const changeProductTypeHandle = (productTypeName: string) => {
    setActiveProductType(productTypeName);
  };

  return (
    <Box className="productTypeHeader_mainContainer">
      <Grid container>
        <Grid
          item
          xs={1}
          className={`${
            activeProductType === "All"
              ? "productTypeHeader_activeContainer"
              : "productTypeHeader_innerContainer"
          }`}
          onClick={changeProductTypeHandle.bind(this, "All")}
        >
          <Typography className="productTypeHeader_titleTxt">All</Typography>
        </Grid>
        {productTypes.map((productType: ProductType, index: number) => (
          <>
            {index + 1 <= 11 && (
              <Grid
                item
                xs={1}
                key={index}
                className={`${
                  activeProductType === productType.type_name
                    ? "productTypeHeader_activeContainer"
                    : "productTypeHeader_innerContainer"
                }`}
                onClick={changeProductTypeHandle.bind(
                  this,
                  productType.type_name
                )}
              >
                <Typography className="productTypeHeader_titleTxt">
                  {productType.type_name}
                </Typography>
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductTypeHeader;
