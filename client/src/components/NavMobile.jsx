import { React, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

export default function NavMobile() {


    const [isOpen, setOpen] = useState(false)
    function handleHamburger() {
        setOpen(!isOpen)
    }



    let navLinkArray = [
        "Home",
        "About",
        "Tools",
        "Projects",
        "Contact",

    ]

    let navLinks = (
        <ul className={`nav-mobile-link-container ${isOpen ? "navOpen" : "navClosed"}`}>
            {navLinkArray.map((link) => {
                return (
                    <li key={"nav-mobile" + link} className="nav-mobile-link"><a href={'#' + link} onClick={handleHamburger}>{link}</a></li>
                )
            })}
        </ul>
    )



    return (
        <nav>
                <div className="burger-container">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

        <div className={`nav-mobile-full  ${isOpen ? "navOpen" : "navClosed"}`}>

                <div className='nav-mobile-viewport' >

                    {navLinks}

                </div>

            </div>
        </nav>
    )
}
