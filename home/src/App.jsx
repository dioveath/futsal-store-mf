import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import MainLayout from "./MainLayout";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import PDPContent from "pdp/PDPContent";
import PDPLayout from "./PDPLayout";
import AboutLayout from "./AboutLayout";
import LoginLayout from "./auth/LoginLayout";
import RegisterLayout from "./auth/RegisterLayout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/product/:id" element={<PDPLayout />} />
      <Route path="/about" element={<AboutLayout />} />
      <Route path="/auth/login" element={<LoginLayout />} />
      <Route path="/auth/register" element={<RegisterLayout />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
