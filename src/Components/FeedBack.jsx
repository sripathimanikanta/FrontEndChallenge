import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/feedback.css'

const FeedBack = () => {
  return (
    <>
    <section className="feed_back">
        <div className="feedback_head heading">What they've said</div>
        <div className="carousel">
          <div className="person one">
            <img src="assets/avatar-anisha.png" alt="" />
            <div className="name">Anisha Li</div>
            <div className="feed">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestone at all times keeps
              everyone motivated."
            </div>
          </div>
          <div className="person two">
            <img src="assets/avatar-ali.png" alt="" />
            <div className="name">Ali Bravo</div>
            <div className="feed">
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </div>
          </div>
          <div className="person threee">
            <img src="assets/avatar-richard.png" alt="" />
            <div className="name">Richard Watts</div>
            <div className="feed">
              "Manage Allows us to provide structure and process.It keeps us
              organized and focused.I can't stop recommending them to everyone i
              talk to!"
            </div>
          </div>
          <div className="person four">
            <img src="assets/avatar-shanai.png" alt="" />
            <div className="name">Shanai Gough</div>
            <div className="feed">
              "Their Software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive."
            </div>
          </div>
        </div>
        <div className="hero_button_get_started"><NavLink to={"/"}>Get Started</NavLink></div>
      </section>
    </>
  )
}

export default FeedBack