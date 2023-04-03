<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import { useState } from "react";
>>>>>>> acbf130584181451d90491500d6efe0e8f4dbe02
import { Route, Routes } from "react-router-dom";
import { AdminScreen } from "../../admin/pages/AdminScreen";
import { ErrorScreen } from "../../error 404/pages/ErrorScreen";
import { Footer } from "../../ui/components/Footer";
import { NavbarC } from "../../ui/components/NavBar";
import { HomeScreen } from "../pages/HomeScreen";
import { MenuScreen } from "../pages/MenuScreen";
import { ErrorScreen } from "../../error 404/pages/ErrorScreen"

export const UserRoutes = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
<<<<<<< HEAD

=======
>>>>>>> acbf130584181451d90491500d6efe0e8f4dbe02
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
<<<<<<< HEAD
=======
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

>>>>>>> acbf130584181451d90491500d6efe0e8f4dbe02
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </div>
  );
};
