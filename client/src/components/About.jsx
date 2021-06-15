import React from 'react'

//Image Import//
import AboutPic1 from '../img/Senou - Aboutpic.jpg'
import AboutPic2 from '../img/Senou - Aboutpic2.jpg'

export default function About() {
    return (
        <div id="About" className="about-full">
            <div className="about-viewport">

                <div className="about-box-1">
                        <h3>It's pronounced <span className="title-highlight">Say-New</span></h3>
                    <div>
                    

                        <p>While some of my  freetime is spent building personal projects to make my life a bit easier and more streamlined,  I also enjoy rock climbing, hiking, mountain biking, backcountry-skiing, cooking, playing guitar, and travelling. The underlying philosophy is better myself through creative, strenuous, team building activities while sharing knowledge and building community.</p>

                    </div>
                </div>

                <div className="about-box-2">

                    <img className="about-pic" src={AboutPic2} alt="Senou Hanging Out"></img>
                </div>



            </div>

        </div>
    )
}
