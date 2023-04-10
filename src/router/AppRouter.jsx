import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../auth/pages/LoginScreen";
import { RegisterScreen } from "../auth/pages/RegisterScreen";
import { UserRoutes } from "../user/routes/UserRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
