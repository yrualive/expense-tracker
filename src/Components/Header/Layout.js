import React from "react";
import Header from "./Header";
import classes from "./Header.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
