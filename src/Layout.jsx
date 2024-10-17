import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from './myComponent/NavBar'

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
