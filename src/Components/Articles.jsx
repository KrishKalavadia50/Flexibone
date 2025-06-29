import React from 'react'
import{GiMicroscope, GiTeacher, GiFirstAidKit, GiHeartBeats, GiDiscussion, GiHealing} from "react-icons/gi";

function Articles() {
  return (
    <div>
      <div class="Articles-hero-section">
      <div className="overlay"></div>
        <div class="Articles-content">
            <h3>Stay Informed About</h3>
            <h2 style={{color:"white"}}>Orthopedic Health</h2>
            <p>
                Discover expert insights, the latest treatments, and recovery tips from top orthopedic specialists. 
                Stay updated with valuable articles and research in orthopedic care.
            </p>
        </div>
        <div class="info-box">
            <div class="features">
                <div class="feature">
                    <GiMicroscope class="icon"></GiMicroscope>
                    <p>Latest Research</p>
                </div>
                <div class="feature">
                    <GiTeacher className='icon'></GiTeacher>
                    <p>Expert Advice</p>
                </div>
                <div class="feature">
                    <GiFirstAidKit className="icon"></GiFirstAidKit>
                    <p>Treatment Options</p>
                </div>
                <div class="feature">
                <GiHeartBeats className="icon"></GiHeartBeats>
                    <p>Preventive Care</p>
                </div>
                <div class="feature">
                <GiHealing className="icon"></GiHealing>
                    <p>Recovery Tips</p>
                </div>
                <div class="feature">
                <GiDiscussion className="icon"></GiDiscussion>
                    <p>Patient Stories</p>
                </div>
            </div>
            <button class="ct-button">Read Latest Articles Now!</button>
        </div>
    </div>
    </div>
  )
}

export default Articles
