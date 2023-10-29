import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./Screens/HomePage/HomePage.web";
import CartPage from "./Screens/CartPage/CartPage.web";
import LoginPage from "./Screens/LoginPage/LoginPage.web";
import ProductsPage from "./Screens/ProductsPage/ProductsPage.web";
import CustomProductPage from "./Screens/ProductPage/CustomProductPage.web";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/product/:id" element={<CustomProductPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
