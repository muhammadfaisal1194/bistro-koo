import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import CartEmpty from "./pages/CartEmpty";
import Cart from "./pages/Cart";
import ActiveMain from "./pages/ActiveMain";
import Snacks from "./pages/Snacks";
import Drink from "./pages/Drink";
import SideTab from "./components/SideTab";


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart_empty" element={<CartEmpty />} />
        </Routes>
      </BrowserRouter>
      <Footer /> */}
      <SideTab/>
    </>
  );
}

export default App;
