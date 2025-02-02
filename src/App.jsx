import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductsPage from "./pages/products";

export default function App() {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={<div className="text-center h-screen">Hello World</div>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* Error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
