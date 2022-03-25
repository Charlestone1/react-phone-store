import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import { ProductProvider } from "./context";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
        <Footer />
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
