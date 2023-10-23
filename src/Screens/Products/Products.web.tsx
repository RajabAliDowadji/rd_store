import React from "react";
import CustomHeader from "../CustomHeader/CustomHeader.web";
import ProductTypeCarousal from "../CustomHeader/ProductTypeHeader.web";
import "./Products.web.css";

const Products = () => {
  return (
    <CustomHeader>
      <ProductTypeCarousal />
    </CustomHeader>
  );
};

export default Products;
