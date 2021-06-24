import React from 'react'

//Image Import//
import AboutPic2 from '../img/Senou - Aboutpic2.jpg'

import Resume from '../files/Resume - Senou Lynn.pdf'

export default function AboutMobile() {
    return (
        <div id="About" className="about-mobile-full">
            <div className="about-mobile-viewport">

                <div className="about-mobile-box-1">
                <div className="about-mobile-box-2">

                    <h4>Born in Africa, based out of <span className="title-highlight">Vermont</span></h4>
                    <img className="about-mobile-pic" src={AboutPic2} alt="Senou Hanging Out"></img>
                </div>
                    <div>
                        <p>Much of my life has been spent trying new things, travelling to new places, and finding new ways to be better person and grow in better ways. I was lucky enough to have parents who instilled an open and growth mindset which I attribute much of my personal growth to. I enjoy rock climbing, hiking, mountain biking, backcountry-skiing, cooking, playing guitar, and travelling - all feeding into my philosophy of bettering myself through creative, strenuous, team building activities to build community by sharing and caring deeply for those around me. </p>
                        <hr></hr>
                        <p>For the past 5 years I've worked in fine-dining service, creating luxurious experiences for guests through acute wine and food knowledge and meticulous service. In light of the recent pandemic I decided to pivot to Web Development. Starting with free online HTML and CSS courses through finishing the Burlington Code Academy Bootcamp, I've been able to accumulate quite a bit of knowledge and experience in a short amount of time. As a freshly minted developer, I'm excited to see where this career path will lead and looking forward to building fantastic products for clients! </p>

                        <div className="about-mobile-info-container">
                            <div className="about-mobile-info-sub-container">
                                <div>
                                    <p>Name:</p>
                                    <p>Phone:</p>
                                    <p>Email:</p>
                                </div>
                                <div>
                                    <p>Senou Lynn</p>
                                    <p>802-829-0160</p>
                                    <p>Senou.Lynn@Gmail.com</p>
                                </div>
                            </div>
                            <div>
                                    <a href={Resume} download="Senou Lynn - Resume" target='_blank' rel="noreferrer" >
                                        <button className="button-1">Download my Resume!</button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}
