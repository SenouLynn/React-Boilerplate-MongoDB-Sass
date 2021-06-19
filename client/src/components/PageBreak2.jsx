import React from 'react'

export default function PageBreak() {
    let iconLinkedIn = <i className="fab fa-linkedin fa-3x"></i>
    let iconGithub = <i className="fab fa-github-square fa-3x"></i>
    let iconEmail = <i className="fas fa-envelope-square fa-3x"></i>


    return (
        <div className="page-break-2">
            <div className="page-break-viewport">
                {/* <p>"Ask not what your company can do for you, ask what you can do for your company." - JFK</p> */}
            
                    <a href="https://www.linkedin.com/in/senou-lynn-44857a11a/" target="_blank">{iconLinkedIn}</a>
                    <a href="https://github.com/SenouLynn" target="_blank">{iconGithub}</a>
                    <a href="mailto:senou.lynn@gmail.com?subject=Greetings!" target="_blank">{iconEmail}</a>

                
            </div>
        </div>
    )
}
