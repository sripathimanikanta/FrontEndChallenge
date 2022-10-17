import React from 'react'
import '../Css/shoutout.css'
import { NavLink } from 'react-router-dom'

const ShoutOut = () => {
  return (
    <>
    <section className="shoutout">
        <div className="Mission_motto">Simplify how your team works today.</div>
        <div className="hero_button_get_started"> <NavLink to={"/"}> Get Started</NavLink></div>
      </section>
    </>
  )
}

export default ShoutOut