import React from 'react'
import '../Css/about.css'

const About = () => {
  return (
    <>
    <section className="about">
    <div className="flex-container">
      <div className="main_info_content">
        <div className="about-info-heading heading">
          What's different about Manage?
        </div>
        <div className="about-info-desc desc">
          Manage provides all the functionality your team needs, withour the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </div>
      </div>
      <div className="small_flex_cont">
        <div className="flexers">
          <div className="number">01</div>
          <div className="heading">Track company - wide progress</div>
          <div className="desc">
            see how your day-to-day tasks fit into the wider vision.Go from
            tracking progress at the milestone level all the way done to the
            smallest of details.Never lose sight of the bigger picture
            again.
          </div>
        </div>
        <div className="flexers">
          <div className="number">02</div>
          <div className="heading">Advanced built-in reports</div>
          <div className="desc">
            Set internal delivery estimate and track progress towards
            company goals.Our customisable dashboard helps you build out the
            reports your need to keep key stakeholders informed.
          </div>
        </div>
        <div className="flexers">
          <div className="number">03</div>
          <div className="heading">Everything you need in one place</div>
          <div className="desc">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents.Manage offers an
            all-in-one team productivity solution.
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default About