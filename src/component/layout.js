import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* The Outlet component renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;