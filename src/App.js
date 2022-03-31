import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PortfolioBody from "./components/PortfolioBody";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header/>
      <PortfolioBody />
      <Footer />
    </div>
  );
}
