import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png"; 

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "flex active" : "flex"}>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
