import React from "react";
import coverImg from "./futsal_cover.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutContent from "./about/AboutContent";

export default function AboutLayout() {
  return (
    <>
    <Header/>
      <AboutContent/>
    <Footer/>
    </>
  );
}
