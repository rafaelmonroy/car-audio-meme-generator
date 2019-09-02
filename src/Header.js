import React from "react"
import logo from "./B5E.png"


function Header() {
    return (
        <header>
            <img 
                src={logo}
                alt="Problem?"
            />
            <p>Car Audio Meme Generator</p>
        </header>
    )
}

export default Header