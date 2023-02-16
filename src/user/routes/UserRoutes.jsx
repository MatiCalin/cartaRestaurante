import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../../404/pages/ErrorScreen";
import { Navbar } from "../../ui/components/NavBar";
import { HomeScreen } from "../pages/HomeScreen";
import { MenuScreen } from "../pages/MenuScreen";

export const UserRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
};
