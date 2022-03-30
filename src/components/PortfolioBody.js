import React, { useState } from "react";
import Navbar from "./Navbar";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import '../styles/style.css'
export default function PortfolioBody() {
  const [currentPage, setCurrentPage] = useState("Bio");

  const renderPage = () => {
    if (currentPage === "Bio") {
      return <Bio />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page)
  return (
      <div> 
        <Navbar currentPage={currentPage} handlePageChange= {handlePageChange} />
        {renderPage()}
      </div>
  )
}
