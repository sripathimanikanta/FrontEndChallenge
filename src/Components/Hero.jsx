import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Css/hero.css'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="flex-container-hero">
          <img src="assets/illustration-intro.svg" alt="" className="hero-img" />
          <div className="hero-content">
            <div className="hero-heading heading">
              Bring everyone together to build better products.
            </div>
            <div className="hero-description desc">
              Manage makes it simple to software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </div>
            <div className="hero_button_get_started">
              <NavLink to={"/"}>Get Started</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;