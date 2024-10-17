import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./myComponent/navBar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      {/* Navbar will be displayed on all pages */}
      <NavBar />

      {/* The Outlet renders the matched child route */}
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
