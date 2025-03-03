// import React from "react";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
