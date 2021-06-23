import React from 'react'
import { useMediaQuery } from 'react-responsive'



import OutMaineGif from '../img/OutMaine-gif.gif'
import tilGif from '../img/TIL-gif.gif'
import chatApp from '../img/WebSocketChatApp-gif.gif'
import yelpington from '../img/Yelpington-gif.gif'

import binarySearch from '../img/BinarySearchVisualizer-gif.gif'

export default function Projects(props) {

    function flipCard() {

    }

    //Conditionally Render Components Based on Screen Size//

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 800px)'
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

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
            "description": "A simple local chat application I built to learn how Websockets work for another project. The current user interface utilizes Material UI components. It currently lives locally but could adapt for peer-to-peer communication with persisting messages through DB connection",
            "link": chatApp,
            "github": "https://github.com/SenouLynn/websocket-chat"
        },
        {
            "name": "Yelpington",
            "gif": yelpington,
            "description": "A single-page React-app with an express back-end managing API calls to MongoDB create a persistent review application along with an integrated Leaflet's map viewport",
            "link": "https://ya-yelpington.herokuapp.com/",
            "github": "https://github.com/SenouLynn/yelpington-SenouLynn"
        },
        {
            "name": "Binary Search Visualizer",
            "gif": binarySearch,
            "description": "Desktop website built to visualize how a logarithmic or binary search works to efficiently narrow results from an ordered list.",
            "link": "https://binary-search-visualizer.herokuapp.com/",
            "github": "https://github.com/SenouLynn/binary-search-visualizer"
        },

    ]

    let projectGridBuilder = projectShowcase.map((project) => {

        let stringSplit = project.name.split(" ")

        return (
            <div key={project.name + projectShowcase.indexOf(project)} className="grid-item card-flip">
                <h5>{stringSplit[0]} <span className="title-highlight">{stringSplit[1]}</span> {stringSplit[2] ? stringSplit[2] : ""}</h5>
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
                        {isTabletOrMobile && <>

                            <button onClick={flipCard()}>About</button>
                        </>
                        }
                    </div>
                    <div>
                        <a href={project.github} target="_blank" rel="noreferrer" ><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>

                <hr></hr>
            </div>

        )

    })



    return (
        <div id="Projects" className="projects-full">
            <div className="projects-viewport">
                <div className="project-display-container">
                    <h3>Past <span className="title-highlight">Projects</span></h3>
                    <hr></hr>
                    <div className="projects-grid-container">

                        {projectGridBuilder}

                    </div>

                </div>
            </div>
        </div>
    )
}
