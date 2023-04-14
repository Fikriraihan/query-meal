import React from "react";
import classes from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: any) {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
