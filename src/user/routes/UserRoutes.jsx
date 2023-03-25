import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../../ui/components/Footer";
import {  NavbarC } from "../../ui/components/NavBar";
import { HomeScreen } from "../pages/HomeScreen";
import { MenuScreen } from "../pages/MenuScreen";

export const UserRoutes = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
      <NavbarC 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
<<<<<<< HEAD
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        
=======
        <Route path="/home" element={<HomeScreen 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />} />
        <Route path="/menu" element={<MenuScreen 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />} />
        <Route path="/*" element={<ErrorScreen />} />
>>>>>>> b8d66333f89f62a45886e703ccb7bc084cbfd9b1
      </Routes>
      <Footer />
    </div>
  );
};
