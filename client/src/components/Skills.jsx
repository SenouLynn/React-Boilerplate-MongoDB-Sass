import React from 'react'
import SkillSub from './Skills-sub'


//Logo Bank
import ReactLogo from '../img/React-logo.png'
import MongoDBLogo from '../img/MongoDbLogo.png'
import FirebaseLogo from '../img/Firebase-logo.png'
import ExpressLogo from '../img/Expressjs-2.png'
import NodejsLogo from '../img/NodejsLogo-2.png'
import HerokuLogo from '../img/heroku-logo-stroke-gradient.png'
import AlgoliaLogo from '../img/Algolia-logo-sm.png'



export default function Skills() {

    const skillsObject = [
        {
            "name": "React",
            "logo": ReactLogo,
            "description": ""
        },
        {
            "name": "MongoDB",
            "logo": MongoDBLogo,
            "description": ""
        },
        {
            "name": "Firebase",
            "logo": FirebaseLogo,
            "description": ""
        },
        {
            "name": "Node.js",
            "logo": NodejsLogo,
            "description": ""
        },
        {
            "name": "Express",
            "logo": ExpressLogo,
            "description": ""
        },
        {
            "name": "Heroku",
            "logo": HerokuLogo,
            "description": ""
        },
        {
            "name": "Aloglia",
            "logo": AlgoliaLogo,
            "description": ""
        },
    
    ]

    let skillsDiv = (
        skillsObject.map((obj) => {
                               
            return (
            <SkillSub name={obj.name} logo={obj.logo} description={obj.description} />
            )
        })
    )
    return (
        <div id="Tools" className="skills-full">
            <div className="skills-viewport">

                <h3><span className="title-highlight">E</span>xperience</h3>
                <hr></hr>
                <div className="skills-display-container">
                    {skillsDiv}
                </div>
            <hr></hr>
            </div>
        </div>
    )
}
