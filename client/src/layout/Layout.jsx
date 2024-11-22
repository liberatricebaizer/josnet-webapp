import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import { FaGg } from "react-icons/fa";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        {children}
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
