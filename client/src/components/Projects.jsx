import React from 'react'


import OutMaineGif from '../img/OutMaine-gif.gif'
import tilGif from '../img/TIL-gif.gif'
import chatApp from '../img/WebSocketChatApp-gif.gif'

export default function Projects(props) {
    const projectShowcase = [
        {
            "name": "OutMaine! Resource Library",
            "gif": OutMaineGif,
            "description": "Full Stack application built by myself and 3 teammates harnessing the power of Algolia to increase searchability through OutMaine's resource database. We delivered 2 products - a new and improved user interface and an admin portal for executives to manage available resources and edit content and search parameters",
            "link": "https://outmaine.herokuapp.com/",
            "github": "https://github.com/SenouLynn/capstone-OutMaine"
        },
        {
            "name": "Journal App",
            "gif": tilGif,
            "description": "A full-CRUD, journal/blog application linking an easy-to-use front-end experience to MongoDb through an express back-end server",
            "link": "https://til-senou-bca.herokuapp.com/",
            "github": "https://github.com/SenouLynn/til-SenouLynn"

        },
        {
            "name": "WebSocket Chat",
            "gif": chatApp,
            "description": "A simple local chat application I built to learn how Websockets work for another project. It currently lives locally but could adapt for peer-to-peer communication with persisting messages through DB connection",
            "link": chatApp,
            "github": "https://github.com/SenouLynn/websocket-chat"
        },
        {
            "name": "Yelpington",
            "gif": "",
            "description": "",
            "link": "",
            "github": ""
        },
        {
            "name": "Binary Search Visualizer",
            "gif": "",
            "description": "",
            "link": "https://binary-search-visualizer.herokuapp.com/",
            "github": ""
        },
        {
            "name": "Tic Tac Toe",
            "gif": "",
            "description": "",
            "link": "",
            "github": ""
        },

    ]
    // {
    //     "name": "",
    //     "gif": "",
    //     "description": "",
    //     "link": "",
    //     "github": ""
    // },

    let projectGridBuilder = projectShowcase.map((project) => {

        let stringSplit = project.name.split(" ")

        return (
            <div key={project.name + projectShowcase.indexOf(project)} className="grid-item card-flip">
                <h5>{stringSplit[0]} <span className="title-highlight">{stringSplit[1]} {stringSplit[3] ? stringSplit[3] : ""}</span></h5>
                <div className="card-flip-inner">

                    <div className="card-flip-front">
                        <img src={project.gif} alt={project.name + " Showcase"}></img>

                    </div>

                    <div className="card-flip-back">
                        <div>
                            <p>{project.description}</p>
                        </div>
                    </div>

                </div>
                <div className="project-icon-box">
                    <div>
                        <a href={project.link} target="_blank" rel="noreferrer" ><i className="fas fa-link fa-2x"></i></a>
                    </div>
                    <div>
                        <a href={project.github} target="_blank" rel="noreferrer" ><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>

        )

    })


    return (
        <div id="Projects" className="projects-full">
            <div className="projects-viewport">
                <div className="project-display-container">
                    <h3>Past <span className="title-highlight">Projects</span></h3>

                    <div className="projects-grid-container">
                      
                        {projectGridBuilder}

                    </div>

                </div>
            </div>
        </div>
    )
}
