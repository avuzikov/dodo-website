import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/dodo-logo.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <img src={logo} alt="Logo" className={classes.logo} />
        {props.children}
      </header>
    </React.Fragment>
  );
};

export default Header;
