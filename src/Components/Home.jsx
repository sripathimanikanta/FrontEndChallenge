import React from "react";
import About from "./About";
import FeedBack from "./FeedBack";
import Hero from "./Hero";
import ShoutOut from "./ShoutOut";
import '../Css/style.css'

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <About />
        <FeedBack />
        <ShoutOut />
      </div>
    </>
  );
};

export default Home;
