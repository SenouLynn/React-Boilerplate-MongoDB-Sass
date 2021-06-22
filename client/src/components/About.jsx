import React from 'react'

//Image Import//
import AboutPic2 from '../img/Senou - Aboutpic2.jpg'

import Resume from '../files/Resume - Senou Lynn.pdf'
export default function About() {
    return (
        <div id="About" className="about-full">
            <div className="about-viewport">

                <div className="about-box-1">
                    <h3>It's pronounced <span className="title-highlight">Say-New</span></h3>
                    <div>
                        <p>While some of my  freetime is spent building personal projects to make my life a bit easier and more streamlined,  I also enjoy rock climbing, hiking, mountain biking, backcountry-skiing, cooking, playing guitar, and travelling. The underlying philosophy is better myself through creative, strenuous, team building activities while sharing knowledge and building community.</p>

                        <div></div>
                        <div className="about-info-container">
                            <div className="about-info-sub-container">
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
                            <div className="about-info-sub-container">
                                <div>
                                    <p>Age:</p>
                                    <p>Location:</p>
                                    <p>Looking for Work:</p>
                                </div>
                                <div>
                                    <p>26</p>
                                    <p>Burlington, VT (Open for Remote)</p>
                                    <p>Yes!</p>
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
                
                <div className="about-box-2">

                    <img className="about-pic" src={AboutPic2} alt="Senou Hanging Out"></img>
                </div>



            </div>

        </div>
    )
}
