import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminScreen } from "../../admin/pages/AdminScreen";
import { ErrorScreen } from "../../error 404/pages/ErrorScreen";
import { Footer } from "../../ui/components/Footer";
import { NavbarC } from "../../ui/components/NavBar";
import { MenuScreen } from "../pages/MenuScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { AboutUsScreen } from "../pages/AboutUsScreen";
import Pedido from "../../components/Pedido";

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
        <Route
          path="/home"
          element={
            <HomeScreen
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuScreen
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/pedidos"
          element={
            <Pedido
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/administration"
          element={
            <AdminScreen
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/nosotros"
          element={
            <AboutUsScreen
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />

        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </div>
  );
};
