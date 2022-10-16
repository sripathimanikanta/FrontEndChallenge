import React from "react";
import { Outlet } from "react-router";
import "../Css/nav.css";
// import imgs from '../assets/logo.svg'

const Nav = () => {
  const menu = document.querySelector('.menu');
  const close = document.querySelector(".close");
  const nav = document.querySelector("nav");

  menu.addEventListener("click", () => {
    nav.classList.add("open-nav");
    menu.style.transform = "scale(0)";
    close.style.transform = "scale(1) rotate(180deg)";
  });

  close.addEventListener("click", () => {
    nav.classList.remove("open-nav");
    menu.style.transform = "scale(1)";
    close.style.transform = "scale(0) rotate(0deg)";
  });
  return (
    <>
      <header>
        <div className="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>

        <img className="menu" src="../assets/icon-hamburger.svg" alt="" />
        <img className="close" src="../assets/icon-close.svg" alt="" />
        <nav>
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <div className="hero_button_get_started">
          <a href="#">Get Started</a>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
