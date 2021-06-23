import React from 'react'

export default function SkillSub(props) {
    return (
        <div className="skills-sub-container">
            <h4>{props.name}</h4>
            <div className="skills-logo-container">
                <img src={props.logo} className="skills-logo" alt={props.name}></img>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
