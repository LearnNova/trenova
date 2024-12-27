import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
// import Home from "views/home/Home";
import Landing from "views/home/Landing";
import PrivateRoute from "components/PrivateRoute";
import MentorNigeriaPage from "pages/MentorNigeriaPage";
import CareerPageTSR from "pages/CareerPageTSR";
import CareerPageSO from "pages/CareerPageSO";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import PageTitle from "utils/PageTitle";
import SchoolGrowth from "layouts/MentorNigeriaSections/SchoolGrowth";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/" element={<Landing />} />
      <Route 
        path="MentorNigeria" 
        element={
          <>
            <PageTitle title="MentorNigeria"/>
            <MentorNigeriaPage />
          </>
        }/>
      <Route 
        path="career/territory_sales_representative" 
        element={
          <>
          <PageTitle title="Career - Territory Sales Representative" />
          <CareerPageTSR />
          </>
        } />
        <Route 
        path="career/sales_officer" 
        element={
          <>
          <PageTitle title="Career - Sales Officer" />
          <CareerPageSO />
          </>
        } />

      <Route 
        path="PrivacyPolicy" 
        element={
          <>
          <PageTitle title="PrivacyPolicy" />
          <PrivacyPolicyPage />
          </>
        } /> 

        <Route 
          path="schoolgrowthsystem/:name" 
          element={
            <>
            <PageTitle title="School Growth System" />
            <SchoolGrowth />
            </>
        } /> 

      <Route path="" element={<PrivateRoute />}>
        <Route path="admin/*" element={<AdminLayout />} />
        {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
        {/* <Route path="/admin" element={<Navigate to="/admin" replace />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
