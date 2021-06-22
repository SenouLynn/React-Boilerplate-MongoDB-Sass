import React from 'react'

export default function PageBreak() {
    let iconLinkedIn = <i className="fab fa-linkedin fa-3x"></i>
    let iconGithub = <i className="fab fa-github-square fa-3x"></i>
    let iconEmail = <i className="fas fa-envelope-square fa-3x"></i>


    return (
        <div className="page-break">
            <div className="page-break-viewport">
             

                    <a href="https://www.linkedin.com/in/senou-lynn-44857a11a/" target="_blank" rel="noreferrer" >{iconLinkedIn}</a>
                    <a href="https://github.com/SenouLynn" target="_blank" rel="noreferrer" >{iconGithub} </a>
                    <a href="mailto:senou.lynn@gmail.com?subject=Greetings!" target="_blank" rel="noreferrer" >{iconEmail}</a>

                
            </div>
        </div>
    )
}
