import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminScreen } from "../admin/pages/AdminScreen";
import { LoginScreen } from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import { UserRoutes } from "../user/routes/UserRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/administration" element={<AdminScreen />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
