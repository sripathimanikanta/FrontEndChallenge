import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import "../Css/nav.css";
// import imgs from '../assets/logo.svg'

const Nav = () => {
  const open = () =>{
    document.querySelector('nav').classList.add("open-nav");
    document.querySelector('.menu').style.transform = "scale(0)";
    document.querySelector('.close').style.transform = "scale(1) rotate(180deg)";
  }

  const close = () =>{
    document.querySelector('nav').classList.remove("open-nav");
    document.querySelector('.menu').style.transform = "scale(1)";
    document.querySelector('.close').style.transform = "scale(0) rotate(0deg)";
  }
  
  return (
    <>
      <header>
        <div className="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>

        <img className="menu" onClick={open} src="../assets/icon-hamburger.svg" alt="" />
        <img className="close" onClick={close} src="../assets/icon-close.svg" alt="" />
        <nav>
          <ul>
            <li>
              <NavLink to={"pricing"}>Pricing</NavLink>
            </li>
            <li>
            <NavLink to={"products"}>Products</NavLink>
            </li>
            <li>
            <NavLink to={"about"}>About Us</NavLink>
            </li>
            <li>
            <NavLink to={"careers"}>Careers</NavLink>
            </li>
            <li>
            <NavLink to={"community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hero_button_get_started">
        <NavLink to={"/"}>Get Started</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
