import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/feather.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import TermsCondition from "./components/pages/termsCondition";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import Error404 from "./components/pages/404error";
import Error504 from "./components/pages/504error";

import Profile from "./components/userPages/profile";

import SignUp from "./components/signUp";
import Login from "./components/login";

import config from "config";

import ScrollToTop from "./Scroller";

import { useDispatch, useSelector } from "react-redux";
import { setloaderFalse } from "./redux/Auth/Slice";

import { ToastContainer } from "react-toastify";

import ErrorBoundary from "./components/pages/ErrorCompont/Index";
import Password from "./components/userPages/Password";

export const App = () => {
  const Store = useSelector((state) => state?.Auth);
  const { loading } = Store;
  const { serverError } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setloaderFalse());
    }, 4000);
  }, [loading]);

  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <ToastContainer />
      <ScrollToTop />
      <ErrorBoundary>
        {serverError ? (
          <Navigate to="/error-504" />
        ) : (
          <Routes>
            <Route path={`/`} element={<Login />} />
            <Route path="/*" element={<Navigate to="/error-404" />} />
            <Route path="/signup" element={<SignUp loading={loading} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/password" element={<Password />} />

            <Route path="/login" element={<Login />} />
            <Route path="/error-500" element={<Error504 />} />
            <Route path="/error-404" element={<Error404 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
          </Routes>
        )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};
