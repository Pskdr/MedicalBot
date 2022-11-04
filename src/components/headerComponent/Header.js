import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        MedicalBot
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          Tri-Bot
        </a>
      </div>
    </div>
  );
};

export default Header;
