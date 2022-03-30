import React from "react";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Bio from './components/Bio'
import Work from './components/Work'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header /> 
      <Bio />
      <Work />
      <Footer />
    </div>
  )
}
