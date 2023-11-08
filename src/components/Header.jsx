import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header id="header">
        <img src={Logo} alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  );
};

export default Header;
