import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../../error 404/pages/ErrorScreen";
import { Footer } from "../../ui/components/Footer";
import {  NavbarC } from "../../ui/components/NavBar";
import { HomeScreen } from "../pages/HomeScreen";
import { MenuScreen } from "../pages/MenuScreen";

export const UserRoutes = () => {
  return (
    <div>
      <NavbarC />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </div>
  );
};
