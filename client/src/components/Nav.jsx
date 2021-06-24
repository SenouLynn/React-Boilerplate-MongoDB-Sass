import React from 'react'

export default function Nav() {
    let navLinkArray = [
        "Home",
        "About",
        "Tools",
        "Projects",
        "Contact",

    ]

    let navLinks = (
        <ul className="nav-link-container">
            {navLinkArray.map((link) => {
                return (
                <li key={"nav" + link} className="nav-link"><a href={'#' + link}>{link}</a></li>
                )
            })}
        </ul>
    )


    return (
        <nav className="nav-full">
            <div className="nav-viewport">
                <div className="nav-logo">
                    <h3>SL</h3>
                </div>

                {navLinks}

            </div>
            
        </nav>
    )
}
