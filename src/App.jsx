import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
// import Home from "views/home/Home";
import Landing from "views/home/Landing";
import PrivateRoute from "components/PrivateRoute";
import MentorNigeriaPage from "layouts/MentorNigeriaPage";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/" element={<Landing />} />
      <Route path="MentorNigeria" element={<MentorNigeriaPage />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="admin/*" element={<AdminLayout />} />
        {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
        {/* <Route path="/admin" element={<Navigate to="/admin" replace />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
